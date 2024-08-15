import Link from 'next/link'
import React from 'react'
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <div className='text-white w-full flex justify-between items-center md:px-20 py-5 px-5 sticky top-0 left-0 backdrop-blur-xl '>
            <div>
                <Link href={'/'} className='font-bold text-3xl'>
                    Saim.
                </Link>
            </div>
            <div>
                <Button>
                    <Github className="mr-2 h-4 w-4" /> Github
                </Button>
            </div>
        </div>
    )
}

export default Header