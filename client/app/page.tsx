"use client"

import Link from "next/link"
import { BaseNavigationMenu } from "@/components/customized-ui/navigation-menu/base"
import { buttonVariants } from "@/components/ui/button"
import useUserStore from "@/hooks/state/user/useUserStore"
// import useGetTotalUser from "@/hooks/api/user/useGetTotalUser"

export default function IndexPage() {
  
  const isUserSignIn = useUserStore(state=> state.isSignIn)
  // const {data}= useGetTotalUser()
  return (
    <>
    <div>
        {/* <h2 className="text-end text-sm mt-4"><span className="text-yellow-300 font-bold">{data || '0'}</span>個會員</h2> */}
      </div>
      <div className="flex md:hidden justify-center mt-4">
        <BaseNavigationMenu />
      </div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl  md:text-4xl">
            海外港人搵工搵Referral。
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            希望呢個平台幫到大家！祝大家一切順利！
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={"/about"}
            className={buttonVariants({ variant: isUserSignIn ?  'default' :'outline' })}
          >
            了解更多
          </Link>
          {
            !isUserSignIn && <Link href={"/auth"} className={buttonVariants()}>
            登入/註冊
          </Link>
          }
         
        </div>
      </section>
      
    </>
  )
}