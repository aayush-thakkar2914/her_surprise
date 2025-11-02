import { motion } from "framer-motion";
import { Heart, MessageCircle, Video, Calendar, Cake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    date: "22nd July 2024",
    title: "When we first got in touch online",
    description: "This day I had guts to send the request to my Jiminigirl and by luck and god's wish she accepted it. We talked whole night and had the most beautiful night of my whole life. And that night god decided to keep us always together and make us the best couple of the universe.",
    icon: MessageCircle,
  },
  {
    date: "September 2024",
    title: "We Followed each other on Instagram",
    description: "Well my bachaa you gave me your ID long back and the day I saw your profile I was like damn what a cutu hot girl I gonna date in future. But I was shy to add you up and some of my kaands yk but yes from the day we followed each other I was like lattu on your cuteness. I got the most beautiful and cutest girl of the universe.",
    icon: Heart,
  },
  {
    date: "3rd December 2024",
    title: "The Night You Proposed Me",
    description: "So my bachaa we are on the third stage of this timeline and there is a lot to say about this phase of timeline. I asked you or proposed you earlier idk but yeah once meri bachaa said I need time I was afraid to propose or ask my bachaa again. And that night it was unexpected that you were going to propose me. The moment you messaged \"I Love You Aayush\" for a second I was thinking that did my bachaa really proposed me. Like I was shocked that mai neend mai sapna toh nahi dekhing na but then I realized no it's true and this is purest and the most beautiful night of your life Aayush the Bobo utho and Say yess my bachaa \" I Love You Too Khushi\". Thus that night was the official start of our beautiful journey.",
    icon: Cake,
  },
  {
    date: "1st January 2025",
    title: "Our First Virtual Date",
    description: "Distance couldn't keep us apart. Sharing a movie together, even through screens, felt magical.",
    icon: Video,
  },
  {
    date: "May 2023",
    title: "The day I proposed",
    description: "When I asked you to be mine forever, and you said yes. The happiest moment of my life.",
    icon: Heart,
  },
  {
    date: "June 2023",
    title: "Our weekend getaway",
    description: "Just the two of us exploring new places. Every moment felt like a dream come true.",
    icon: Calendar,
  },
  {
    date: "July 2023",
    title: "Celebrating together",
    description: "Dancing under the stars, making memories that will last forever. This is where our story continues.",
    icon: Heart,
  },
  {
    date: "July 2023",
    title: "Celebrating together",
    description: "Dancing under the stars, making memories that will last forever. This is where our story continues.",
    icon: Heart,
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-sunset">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            Our Love Timeline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            Every milestone that brought us closer 💕
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } pl-20 md:pl-0 md:pr-0`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 top-6 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary shadow-glow flex items-center justify-center animate-heart-beat">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                </div>

                <Card className="shadow-romantic hover:shadow-glow transition-smooth bg-card/90 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-primary" size={16} />
                      <p className="text-sm text-primary font-poppins font-semibold">
                        {event.date}
                      </p>
                    </div>
                    <h3 className="text-xl font-dancing font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-poppins">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-16 p-8 rounded-lg bg-card/50 backdrop-blur border border-primary/20"
        >
          <Heart className="inline-block text-primary mb-4 animate-pulse" size={32} />
          <p className="text-lg font-dancing text-foreground mb-2">
            Our story continues...
          </p>
          <p className="text-muted-foreground font-poppins">
            This timeline is just the beginning. With each passing day, we create new memories, share more laughter, 
            and write beautiful chapters together. Many more precious moments and endless happiness are waiting to be 
            added to our journey. Here's to forever creating memories with you! 💕
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Timeline;
