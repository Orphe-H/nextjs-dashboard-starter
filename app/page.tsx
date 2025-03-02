import Providers from './dashboard/providers';
import { LinkButton } from '@/components/ui/link-button';

export default function HomePage() {
    return (
        <Providers>
            <main className="flex min-h-screen w-full flex-col">
                <header className="w-full px-2 h-14 flex items-center justify-end gap-4">
                    <LinkButton href="/login">Connexion</LinkButton>
                    <LinkButton href="/register">Inscription</LinkButton>
                </header>
            </main>
        </Providers>
    );
}
