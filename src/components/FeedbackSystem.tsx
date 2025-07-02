
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, Send, MessageSquare } from 'lucide-react';

interface FeedbackSystemProps {
  securityLevel: 'low' | 'medium' | 'high';
  contractId?: string;
}

const FeedbackSystem = ({ securityLevel, contractId }: FeedbackSystemProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getSecurityColor = () => {
    switch (securityLevel) {
      case 'low': return '#10B981';
      case 'medium': return '#F59E0B';
      case 'high': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim() && rating > 0) {
      // In a real application, this would send to your backend
      console.log('Feedback submitted:', {
        rating,
        feedback,
        email,
        contractId,
        securityLevel,
        timestamp: new Date().toISOString()
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Card className="bg-gray-800/50 border" style={{ borderColor: getSecurityColor() }}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${getSecurityColor()}20` }}
          >
            <MessageSquare 
              className="h-5 w-5" 
              style={{ color: getSecurityColor() }}
            />
          </div>
          <img 
            src="/lovable-uploads/69ea8358-5e8f-443e-9dc3-851b5a40b654.png" 
            alt="Hexatech Logo" 
            className="h-6 w-6 object-contain"
          />
          <h3 className="text-xl font-semibold text-white">Payment & Service Feedback</h3>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${getSecurityColor()}20` }}
            >
              <Send style={{ color: getSecurityColor() }} className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Thank You!</h4>
            <p className="text-gray-300">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Rating Section */}
            <div>
              <Label className="text-white mb-3 block">Rate Your Experience</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 cursor-pointer transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-current'
                        : 'stroke-current fill-transparent'
                    }`}
                    style={{ 
                      color: star <= (hoveredRating || rating) ? getSecurityColor() : '#6B7280'
                    }}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <Label htmlFor="email" className="text-white">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white mt-1"
                placeholder="your@email.com"
              />
            </div>

            {/* Feedback Textarea */}
            <div>
              <Label htmlFor="feedback" className="text-white">Your Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white mt-1 min-h-[100px]"
                placeholder="Share your experience with our payment system and services..."
              />
            </div>

            {/* Contract Info */}
            {contractId && (
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-300">
                  Contract ID: <span className="font-mono">{contractId}</span>
                </p>
                <p className="text-sm text-gray-300">
                  Security Level: <span 
                    className="capitalize font-semibold"
                    style={{ color: getSecurityColor() }}
                  >
                    {securityLevel}
                  </span>
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmitFeedback}
              disabled={!feedback.trim() || rating === 0}
              className="w-full"
              style={{ 
                backgroundColor: getSecurityColor(),
                opacity: (!feedback.trim() || rating === 0) ? 0.5 : 1
              }}
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Feedback
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackSystem;
