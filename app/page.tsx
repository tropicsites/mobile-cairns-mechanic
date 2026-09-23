import type {Metadata} from "next";import {HomePage} from "@/components/home-page";
export const metadata:Metadata={title:"Mobile Mechanic Cairns | Clutches, Timing Belts & RWC",description:"24/7 Cairns mobile mechanic for every make. Clutch replacement, timing belts, RWC, pre-purchase inspections, roadside help and workshop repairs.",alternates:{canonical:"/",languages:{"en-AU":"/",es:"/es",fr:"/fr","x-default":"/"}}};
export default function Page(){return <HomePage lang="en"/>}
