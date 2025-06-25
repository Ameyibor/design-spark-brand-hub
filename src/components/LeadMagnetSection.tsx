
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LeadMagnetSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
          <CardContent className="p-12">
            <Download className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Get Our Free Branding Checklist</h2>
            <p className="text-gray-300 text-lg mb-8">
              Start strong with our pro-approved design essentials. Perfect for startups and growing businesses.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 text-lg px-8 py-4">
              Download Now
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
