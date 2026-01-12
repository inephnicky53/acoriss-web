import type {Metadata} from 'next';
import {PageHeader} from '@/components/shared/PageHeader';
import {HistorySection} from '@/components/about/HistorySection';
import {MissionVisionSection} from '@/components/about/MissionVisionSection';
import {ValuesSection} from '@/components/about/ValuesSection';
import {TeamSection} from '@/components/about/TeamSection';
import {TimelineSection} from '@/components/about/TimelineSection';
import EnhancedScrollNavigation from "@/components/EnhancedScrollNavigation";

export const metadata: Metadata = {
    title: 'À propos - Acoriss | Notre histoire et notre mission',
    description:
        'Découvrez Acoriss, leader des solutions de paiement en RDC. Notre mission, notre vision et notre équipe dédiée à l\'innovation.',
    keywords: ['Acoriss', 'à propos', 'mission', 'vision', 'équipe', 'RDC', 'Kinshasa'],
};

const sections = [
    {
        id: 'history-section',
        icon: 'Coffee',
        label: 'Notre Histoire',
        color: 'from-yellow-400 to-yellow-500'
    },
    {
        id: 'mission-vision-section',
        icon: 'GraduationCap',
        label: 'Notre Mission & Vision',
        color: 'from-purple-400 to-purple-500'
    },
    {
        id: 'values-section',
        icon: 'Heart',
        label: 'Nos Valeurs',
        color: 'from-green-400 to-green-500'
    },
    {
        id: 'team-section',
        icon: 'Users',
        label: 'Notre Équipe',
        color: 'from-blue-400 to-blue-500'
    },
    {
        id: 'timeline-section',
        icon: 'Clock',
        label: 'Notre Chronologie',
        color: 'from-pink-400 to-pink-500'
    }
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="À propos d'Acoriss"
                subtitle="Notre histoire, notre mission, notre vision"
                description="Acoriss Sarl est un cabinet de conseil multi-spécialisé en tout secteur d'activité, offrant des solutions innovantes de paiement et de services en République Démocratique du Congo."
            />
            <HistorySection/>
            <MissionVisionSection/>
            <ValuesSection/>
            <TeamSection/>
            <TimelineSection/>
            <EnhancedScrollNavigation sections={sections}/>
        </>
    );
}

