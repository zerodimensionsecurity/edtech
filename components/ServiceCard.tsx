import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
    >
      {/* Arrow button */}
      <div className="absolute top-6 right-6">
        <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <ArrowRight className="w-5 h-5 text-background" />
        </div>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 pr-16">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
