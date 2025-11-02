import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart } from "lucide-react";

const cuteMessages = [
  "You're the purest kind of beautiful",
  "Every smile of yours makes the world brighter",
  "Your laugh is my favorite sound",
  "You make my heart skip a beat",
  "The way you look at me melts my heart",
  "Your cuteness is simply irresistible",
];

const Cuteness = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-dreamy">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-primary" size={48} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            Your Adorable Cuteness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            A celebration of everything that makes you so special ✨
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cuteMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              <Card className="shadow-romantic hover:shadow-glow transition-smooth bg-card/90 backdrop-blur border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <Heart
                      className="fill-primary text-primary mx-auto mb-4"
                      size={32}
                    />
                  </motion.div>
                  <p className="text-lg font-poppins text-foreground italic">
                    "{message}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="shadow-romantic bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              <h2 className="text-3xl font-dancing font-bold text-center text-primary mb-8">
                Your Cute Moments
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square bg-gradient-romance rounded-2xl flex items-center justify-center cursor-pointer shadow-soft hover:shadow-glow transition-smooth"
                  >
                    <Sparkles className="text-white" size={32} />
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-muted-foreground font-poppins mt-6 italic">
                [Add your favorite cute photos here]
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cuteness;
