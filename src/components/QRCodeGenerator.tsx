
import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, RefreshCw } from 'lucide-react';

interface QRCodeGeneratorProps {
  securityLevel: 'low' | 'medium' | 'high';
  amount?: number;
  contractId?: string;
}

const QRCodeGenerator = ({ securityLevel, amount, contractId }: QRCodeGeneratorProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState(amount || 0);
  const [loading, setLoading] = useState(false);

  const getSecurityColor = () => {
    switch (securityLevel) {
      case 'low': return '#10B981'; // Green
      case 'medium': return '#F59E0B'; // Orange
      case 'high': return '#EF4444'; // Red
      default: return '#6B7280'; // Gray
    }
  };

  const generateQRCode = async () => {
    setLoading(true);
    try {
      const paymentData = {
        amount: paymentAmount,
        contractId: contractId || 'default',
        securityLevel,
        timestamp: new Date().toISOString(),
        paymentUrl: `${window.location.origin}/payment?amount=${paymentAmount}&contract=${contractId}&security=${securityLevel}`
      };

      const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify(paymentData), {
        width: 300,
        margin: 2,
        color: {
          dark: getSecurityColor(),
          light: '#FFFFFF'
        }
      });
      
      setQrCodeUrl(qrCodeDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
    setLoading(false);
  };

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.download = `payment-qr-${contractId}-${securityLevel}.png`;
      link.href = qrCodeUrl;
      link.click();
    }
  };

  useEffect(() => {
    if (paymentAmount > 0) {
      generateQRCode();
    }
  }, [paymentAmount, securityLevel, contractId]);

  return (
    <Card className="bg-gray-800/50 border" style={{ borderColor: getSecurityColor() }}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
            alt="Hexatech Logo" 
            className="h-8 w-8 object-contain"
          />
          <h3 className="text-xl font-semibold text-white">Payment QR Code Generator</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="amount" className="text-white">Payment Amount ($)</Label>
            <Input
              id="amount"
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(Number(e.target.value))}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: getSecurityColor() }}
            />
            <span className="text-white capitalize">{securityLevel} Security Level</span>
          </div>

          {qrCodeUrl && (
            <div className="text-center">
              <div className="relative inline-block p-4 bg-white rounded-lg">
                <img src={qrCodeUrl} alt="Payment QR Code" className="max-w-full" />
                <div className="absolute top-2 right-2">
                  <img 
                    src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
                    alt="Logo" 
                    className="h-6 w-6 object-contain opacity-80"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 justify-center">
                <Button 
                  onClick={generateQRCode} 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
                  Regenerate
                </Button>
                <Button 
                  onClick={downloadQRCode}
                  style={{ backgroundColor: getSecurityColor() }}
                  className="hover:opacity-80"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
