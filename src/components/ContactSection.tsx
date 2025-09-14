import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Calendar,
  Send,
  MessageCircle,
  Phone,
  MapPin
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.johnson@email.com",
      description: "Best for detailed discussions",
      action: "Send Email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/alex-johnson-pm",
      description: "Professional networking",
      action: "Connect"
    },
    {
      icon: Twitter,
      title: "Twitter",
      value: "@alexjohnson_pm",
      description: "Product insights & thoughts",
      action: "Follow"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "calendly.com/alex-johnson",
      description: "Book a 30-minute chat",
      action: "Book Meeting"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to collaborate on a project, discuss product strategy, 
              or just want to connect, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 bg-surface">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-surface-elevated border-border/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-surface-elevated border-border/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, question, or just say hello!"
                      rows={6}
                      className="bg-surface-elevated border-border/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Other Ways to Connect
                </h3>
                <p className="text-muted-foreground">
                  Choose the method that works best for you. I typically respond 
                  within 24 hours during business days.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="border-border/50 bg-surface hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <method.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {method.title}
                            </h4>
                            <p className="text-sm text-primary mb-1">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Location & Availability */}
              <Card className="border-border/50 bg-surface-elevated">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location & Availability
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground">San Francisco, CA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timezone:</span>
                      <span className="text-foreground">PST (UTC-8)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="text-foreground">Open to opportunities</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span className="text-foreground">Within 24 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;