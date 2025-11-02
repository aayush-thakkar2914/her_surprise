import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Cake } from "lucide-react";
import { Link } from "react-router-dom";

const Moments = () => {
  const galleries = [
    {
      title: "Photos Together",
      icon: Camera,
      description: "Captured memories of our beautiful moments",
      count: 24,
      link: "/photos-gallery",
    },
    {
      title: "Virtual Dates",
      icon: Video,
      description: "Distance couldn't keep us apart",
      count: 12,
      link: "/virtual-dates-gallery",
    },
    {
      title: "Birthday Celebration",
      icon: Cake,
      description: "Making every celebration special",
      count: 8,
      link: "/birthday-gallery",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-sunset">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            Our Moments Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            Every picture tells our story 📸
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {galleries.map((gallery, index) => {
            const Icon = gallery.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={gallery.link}>
                  <Card className="shadow-romantic hover:shadow-glow transition-smooth cursor-pointer bg-card/90 backdrop-blur">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-2xl font-dancing font-bold text-foreground mb-2">
                        {gallery.title}
                      </h3>
                      <p className="text-muted-foreground font-poppins text-sm mb-2">
                        {gallery.description}
                      </p>
                      <p className="text-primary font-poppins font-semibold">
                        {gallery.count} memories
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-romantic bg-card/90 backdrop-blur">
            <CardContent className="p-8">
              <h2 className="text-3xl font-dancing font-bold text-center text-primary mb-8">
                Gallery Preview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-muted rounded-lg flex items-center justify-center cursor-pointer shadow-soft hover:shadow-romantic transition-smooth"
                  >
                    <Camera className="text-muted-foreground" size={32} />
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-muted-foreground font-poppins mt-6 italic">
                [Add your photos here to create a beautiful gallery]
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Moments;
