import { Button, Card, CardBody } from "@nextui-org/react";
import DeskNavbar from "@/components/Navbar/DeskNavbar";
import ProductTable from "@/components/Tables";

export default function Desk() {
  // const router = useRouter();
  // const onPressHandler = async () => {
  //   try {
  //     // Retrive the token from state or session storage.
  //     const axiosResponse = await axios.get("http://ecommerce-api-env.eba-dpmqvdqd.us-west-2.elasticbeanstalk.com/api/user/getAllProducts", {
  //       withCredentials: true,
  //       headers: {
  //         "Content-type": "application/json"
  //       },
  //       params: {
  //         accountId: "A#01JAM87DX3V1N8YHYRY6TY9DXA",
  //         id: "A#01JAM87DX3V1N8YHYRY6TY9DXA"
  //       }
  //     });
  
  //     console.log("Is status 200? ", axiosResponse.status === 200);
  //   } catch(error: any) {
  //     console.log("error:  ", error.status !== 200);
  //     console.log("error:  ", error.response.data.message);
  //     // if (error.status !== 200) router.push("/login");
  //   };
  // };

  return (
    <>
      <DeskNavbar />
      <div className="w-[1300px] m-auto pt-[40px] pb-[40px]">
        <div className="flex flex-col mb-[20px]">
          <h1 className="text-xl font-bold text-default-900 lg:text-3xl">Desk</h1>
          <p className="text-small text-default-400 lg:text-medium">Manage your products</p>
        </div>
        <ProductTable />
        {/* <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
            <Button
              type="submit"
              color="primary"
              onPress={onPressHandler}
            >
              Full Send!
            </Button>
          </CardBody>
        </Card> */}
      </div>
    </>
  );
}