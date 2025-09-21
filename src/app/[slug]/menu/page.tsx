import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
    params: Promise<{slug: string}>;
    searchParams: Promise<{consumptionMethod: string}>
}

const isConsumptionMethodValid = (consumptionMethodOption: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethodOption.toUpperCase())
}

const RestaurantMenuPage = async ({
    params,
    searchParams
}: RestaurantMenuPageProps) => {
    const { slug } = await params
    const { consumptionMethod } = await searchParams

    if (!isConsumptionMethodValid(consumptionMethod)) {
        console.log('bug')
        return notFound();
    }

    const restaurant = await db.restaurant.findUnique({ where: { slug } });
    if (!restaurant){
        return notFound();
    }
    return (
        <div>
           <RestaurantHeader restaurant={restaurant}/>
        </div>
    )
}


export default RestaurantMenuPage;