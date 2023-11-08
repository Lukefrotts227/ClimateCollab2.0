import Auth from "@/components/index/auth";
import Title from "@/components/index/title"; 
import Description from "@/components/index/description";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <Title /> 
      <Description />
      <Auth /> 
    </main>
  )
}
