'use client'
import Image from "next/image";
import Icon from "@/components/icon";
import SquareButton from "@/components/squarebutton";
import Button from "@/components/button";
import ButtonSec from "@/components/buttonsec";
import { useState } from "react";
import Link from "next/link";
export default function Mint() {
    return (
        <>
            <div className="h-[100vh] bg-[#0D0C0C] flex items-center justify-center w-[100%]">
                <div className="relative h-[72vh] w-[45vh] mobile:w-[98vw] mobile:h-[150vw]">
                    <Image src="/nft.png" fill={true} alt="nft" />
                </div>
            </div>
        </>
    )
}