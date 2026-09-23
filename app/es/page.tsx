import type {Metadata} from "next";import {HomePage} from "@/components/home-page";
export const metadata:Metadata={title:"Mecánico móvil en Cairns | 4x4 y todas las marcas",description:"Mecánico móvil 24/7 para todas las marcas. Revisiones 4x4 pre-viaje, inspecciones precompra, asistencia y reparaciones completas.",alternates:{canonical:"/es",languages:{"en-AU":"/",es:"/es",fr:"/fr","x-default":"/"}}};
export default function Page(){return <HomePage lang="es"/>}
