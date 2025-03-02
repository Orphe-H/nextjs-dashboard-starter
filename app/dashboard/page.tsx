import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

export default function DashboardPage() {
    return (
        <div className="flex flex-col space-y-4 p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Revenu total</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45.231 FCFA</div>
                        <p className="text-xs text-muted-foreground">
                            +20,5% mois dernier
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Ventes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2.350</div>
                        <p className="text-xs text-muted-foreground">
                            12.234 ce mois
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Actifs en ce moment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+57</div>
                        <p className="text-xs text-muted-foreground">
                            +201 depuis la dernière heure
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Profit</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">100 FCFA</div>
                        <p className="text-xs text-muted-foreground">
                            +100 depuis le mois dernier
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Section des ventes récentes */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Vue d'ensemble</CardTitle>
                        <CardDescription>A suivre...</CardDescription>
                    </CardHeader>
                    <CardContent>{/* chart */}</CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Ventes Récentes</CardTitle>
                        <CardDescription>
                            Vous avez réalisé 265 ventes ce mois-ci.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src="/avatars/olivia.png"
                                        alt="Olivia Martin"
                                    />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Olivia Martin
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        olivia.martin@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +1.999
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src="/avatars/jackson.png"
                                        alt="Jackson Lee"
                                    />
                                    <AvatarFallback>JL</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Jackson Lee
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        jackson.lee@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +1.999
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src="/avatars/isabella.png"
                                        alt="Isabella Nguyen"
                                    />
                                    <AvatarFallback>IN</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Isabella Nguyen
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        isabella.nguyen@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +1.999
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src="/avatars/william.png"
                                        alt="William Kim"
                                    />
                                    <AvatarFallback>WK</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        William Kim
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        will@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">+99</div>
                            </div>
                            <div className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src="/avatars/sofia.png"
                                        alt="Sofia Davis"
                                    />
                                    <AvatarFallback>SD</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Sofia Davis
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        sofia.davis@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">+39</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
