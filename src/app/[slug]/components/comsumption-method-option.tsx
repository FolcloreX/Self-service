import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";
import Image from 'next/image';
import Link from "next/link";

interface ConsupmtionMethodOptionProps {
    slug: string
    imageUrl: string,
    imageAlt: string,
    bottomText: string,
    option: ConsumptionMethod
}

const ConsumptionMethodOption = ({
    slug,
    imageUrl,
    imageAlt,
    bottomText,
    option,
}: ConsupmtionMethodOptionProps) => {
    return (
        <Card>
            <CardContent className="flex flex-col items-center gap-8 py-8">
                <div className="relative h-[80px] w-[80px]">
                    <Image
                        src={imageUrl}
                        fill
                        alt={imageAlt}
                        className="object-contain"
                    />
                </div>
                <Button variant="secondary" className="rounded-full" asChild>
                    <Link href={`/${slug}/menu?consumptionMethod=${option}`}>{bottomText}</Link>
                </Button>
            </CardContent>
        </Card>
    );
}

export default ConsumptionMethodOption