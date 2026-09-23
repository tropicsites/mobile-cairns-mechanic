import type {Metadata} from "next";import {HomePage} from "@/components/home-page";
export const metadata:Metadata={title:"Mécanicien mobile Cairns | 4x4 et toutes marques",description:"Mécanicien mobile 24h/24 pour toutes les marques. Contrôles 4x4 avant voyage, inspections avant achat et réparations complètes.",alternates:{canonical:"/fr",languages:{"en-AU":"/",es:"/es",fr:"/fr","x-default":"/"}}};
export default function Page(){return <HomePage lang="fr"/>}
