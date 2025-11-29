import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductCard({ title, description, image, link }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-white border-border">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="text-xl mb-3">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
