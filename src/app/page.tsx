import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react";

const HomePage = () =>{
  return (
    <div className="h-screen flex items-center justify-center">
      <Button size="lg">
        Click me <MoveRight />
      </Button>
    </div>
  )
}

export default HomePage;