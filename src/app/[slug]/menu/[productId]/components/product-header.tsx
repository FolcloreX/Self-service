"use client";

import { Button } from "@/components/ui/button";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon, Sheet } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
    product: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const router = useRouter()
  const HandleBackClick = () => router.back()   
  return (
    <div className="relative min-h-[300px] w-full">
        <Button 
            variant="secondary"
            size="icon" 
            className="absolute left-4 top-4 rounded-full z-50"
            onClick={HandleBackClick}
        >
            <ChevronLeftIcon/>
        </Button>
        <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain"
        />
        <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 rounded-full z-50"
        >
            <ScrollTextIcon/>
        </Button>
    </div>
  )
}

export default ProductHeader;