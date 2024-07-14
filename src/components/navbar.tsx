"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image"

const components: { title: string; href: string; }[] = [
  {
    title: "Inscrição",
    href: "/inscricao",
  },
  {
    title: "Submissão",
    href: "/submissao",
  },
  {
    title: "Confirmar Inscrição",
    href: "/confirmar-inscricao",
  },
]

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between w-[100vw] py-2 px-10 md:px-20 border-[--footer] border-b">
        <div className="flex items-center">
        <NavigationMenuItem>
            <Image src="/logo.png" width={75} height={75} alt="Logo" />
        </NavigationMenuItem>
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem className="py-2" href="/" title="Início" />
              <Separator />
              <div className="space-y-1">
                <ListItem className="py-2" href="/inscricao" title="Inscrição" />
                <ListItem className="py-2" href="/submissao" title="Submissão" />
                <ListItem className="py-2" href="/confirmar-inscricao" title="Confirmar Inscrição" />
                <ListItem className="py-2" href="/comissao" title="Comissão" />
              </div>
              <Separator />
              <ListItem className="py-1" href="/patrocinadores" title="Patrocinadores" />
              <ListItem className="py-1" href="/area-dos-participantes" title="Área dos Participantes" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
        <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex relative">
          <NavigationMenuTrigger >Congresso</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
        <Link href="/parceiros" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Parceiros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
        <Link href="/comissao" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Comissão
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
        </NavigationMenuItem>
        </div>

        <div className="flex items-center gap-2">
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <Link className="bg-[--orange-theme] px-4 py-1.5 text-[--white] font-medium rounded-lg" href="/login">
            Cadastro / Login
          </Link>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
