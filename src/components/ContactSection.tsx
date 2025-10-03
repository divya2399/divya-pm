import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Calendar,
  Send,
  MessageCircle,
  MapPin,
  ArrowRight
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
      value: "divyasharma230499@gmail.com",
      description: "Best for detailed discussions",
      action: "Send Email",
      color: "primary"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/divya234",
      description: "Professional networking",
      action: "Connect",
      color: "secondary"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "calendly.com/divyasharma230499",
      description: "Book a 30-minute chat",
      action: "Book Meeting",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-soft-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary px-4 py-1.5">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to collaborate on a project, discuss product strategy, 
              or just want to connect, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-display text-foreground">
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
                    className="bg-background border focus:border-primary transition-colors"
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
                    className="bg-background border focus:border-primary transition-colors"
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
                    className="bg-background border focus:border-primary resize-none transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-blush transition-all duration-300 hover-soft group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 animate-slide-in-soft">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold font-display text-foreground mb-4">
                  Other Ways to Connect
                </h3>
                <p className="text-muted-foreground">
                  Choose the method that works best for you. I typically respond 
                  within 24 hours during business days.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="p-6 border border-border/40 rounded-2xl hover:border-primary/40 transition-all duration-500 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl group-hover:scale-110 transition-all ${
                          method.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                        }`}>
                          <method.icon className={`h-6 w-6 ${
                            method.color === 'primary' ? 'text-primary' : 'text-secondary'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-semibold font-display text-foreground mb-1">
                            {method.title}
                          </h4>
                          <p className={`text-sm mb-1 font-medium ${
                            method.color === 'primary' ? 'text-primary' : 'text-secondary'
                          }`}>
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
                        className="border-primary/40 hover:bg-primary/10 transition-all duration-300 group-hover:scale-105"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location & Availability */}
              <div className="p-6 border border-border/40 rounded-2xl">
                <h4 className="font-semibold font-display text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Location & Availability
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground font-medium">New York City, NY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timezone:</span>
                    <span className="text-foreground font-medium">EDT (GMT-4)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-secondary font-medium">Open to opportunities</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-foreground font-medium">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
