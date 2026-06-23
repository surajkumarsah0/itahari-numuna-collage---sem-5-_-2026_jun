import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Page(){
    return(
        <div>
            <Card>
                <CardContent>
                    <CardTitle>API</CardTitle>

                </CardContent>
                <CardFooter>
                    <Button>Revalidate</Button>
                </CardFooter>
            </Card>
        </div>
    )
}