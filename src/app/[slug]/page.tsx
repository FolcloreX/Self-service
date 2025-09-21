import { getRestaurantBySlug } from '@/data/get-restaurants-by-slug'
import { db } from '@/lib/prisma'
import Image from "next/image";
import { notFound } from 'next/navigation'
import ConsumptionMethodOption from './components/comsumption-method-option';


interface RestaurantPageProps {
    params: Promise<{slug: string}>
}

const RestaurantPage = async ({params}: RestaurantPageProps) => {
    const {slug} = await params
    const restaurant = await db.restaurant.findUnique({ where: { slug } });
    if (!restaurant) {
        return notFound();
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
            {/* LOGO E TITULO */}
            <div className="flex flex-col items-center gap-2">
                <Image 
                    src={restaurant.avatarImageUrl}
                    alt={restaurant.name}
                    width={82}
                    height={82}
                />
                <h2 className="font-semibold">{restaurant.name}</h2>
            </div>

            {/* BEM VINDO */}
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2lx font-semibold">Seja bem-vindo!</h3>
                <p className="opacity-55">
                    Escolha como prefer aproveitar sua refeição. Estamos 
                    oferecer praticidade e sabor em cada detalhe!
                </p>
            </div>

            <div className="pt-14 grid grid-cols-2 gap-4">
                <ConsumptionMethodOption
                    slug={slug}
                    imageUrl="/dine_in.png"
                    imageAlt="Para comer "
                    bottomText="Para comer aqui"
                    option="DINE_IN"
                />      
                <ConsumptionMethodOption
                    slug={slug}
                    imageUrl="/take_out.png"
                    imageAlt="Para levar"
                    bottomText="Para levar"
                    option="TAKEAWAY"
                />             
            </div>
        </div>
    )
}

// serve components = renderizar no servidor
// podem ser async
// podem chamar recursos do back-end (banco de dados)
// não pode usar hooks
// não pode ter interatividade

export default RestaurantPage;