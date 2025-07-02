
import { Shield, AlertTriangle, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SecurityLevelProps {
  level: 'low' | 'medium' | 'high';
  contractType?: string;
  onChange: (level: 'low' | 'medium' | 'high') => void;
}

const SecurityLevel = ({ level, contractType, onChange }: SecurityLevelProps) => {
  const getSecurityConfig = (secLevel: 'low' | 'medium' | 'high') => {
    switch (secLevel) {
      case 'low':
        return {
          color: '#10B981',
          icon: Shield,
          title: 'Standard Security',
          description: 'Basic encryption, suitable for low-value transactions',
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/30'
        };
      case 'medium':
        return {
          color: '#F59E0B',
          icon: AlertTriangle,
          title: 'Enhanced Security',
          description: 'Advanced encryption, recommended for medium-value contracts',
          bgColor: 'bg-orange-500/10',
          borderColor: 'border-orange-500/30'
        };
      case 'high':
        return {
          color: '#EF4444',
          icon: Lock,
          title: 'Maximum Security',
          description: 'Military-grade encryption, required for high-value contracts',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/30'
        };
    }
  };

  const levels: ('low' | 'medium' | 'high')[] = ['low', 'medium', 'high'];

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <img 
          src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
          alt="Hexatech Logo" 
          className="h-6 w-6 object-contain"
        />
        <h3 className="text-xl font-semibold text-white">Contract Security Level</h3>
      </div>
      
      {contractType && (
        <p className="text-gray-300 mb-4">Contract Type: <span className="font-semibold">{contractType}</span></p>
      )}

      <div className="grid gap-3">
        {levels.map((secLevel) => {
          const config = getSecurityConfig(secLevel);
          const Icon = config.icon;
          const isSelected = level === secLevel;

          return (
            <Card
              key={secLevel}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? `${config.bgColor} ${config.borderColor} border-2` 
                  : 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50'
              }`}
              onClick={() => onChange(secLevel)}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${config.color}20` }}
                  >
                    <Icon 
                      className="h-5 w-5" 
                      style={{ color: config.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-1"
                      style={{ color: isSelected ? config.color : '#FFFFFF' }}
                    >
                      {config.title}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {config.description}
                    </p>
                  </div>
                  {isSelected && (
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: config.color }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SecurityLevel;
