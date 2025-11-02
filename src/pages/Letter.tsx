import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const letterText = `My Dearest Love,

As I sit here writing this, my heart overflows with emotions I can barely put into words. You are the most precious gift life has ever given me.

From the moment you came into my life, everything changed. The world became brighter, colors more vivid, and every day filled with new meaning. Your smile has the power to melt away all my worries, and your laughter is the sweetest melody I've ever heard.

You've taught me what it truly means to love and be loved. In your eyes, I see my future. In your embrace, I find my home. With you, I've discovered parts of myself I never knew existed.

Thank you for being patient with my flaws, for celebrating my victories, and for standing by me through every storm. Thank you for your kindness, your warmth, and for choosing to share your beautiful heart with me.

I promise to cherish every moment we have together, to make you smile every single day, and to love you with everything I have. You are my today and all of my tomorrows.

Forever and always yours,
With all my love 💕`;

const Letter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + letterText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-dreamy">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-3xl"
      >
        <div className="text-center mb-12">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Heart className="fill-primary text-primary" size={48} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            A Letter From My Heart
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="shadow-romantic bg-card/95 backdrop-blur border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground font-poppins whitespace-pre-wrap leading-relaxed text-base md:text-lg">
                  {displayedText}
                  {currentIndex < letterText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Letter;
