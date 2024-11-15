"use client";

import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios";

const DeskNavbar: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const onLogOut = async () => {
    try {
      // Set delete cookie http only cookie.
      const axiosResponse = await axios.get("http://ecommerce-api-env.eba-dpmqvdqd.us-west-2.elasticbeanstalk.com/api/deleteCookie", {
        withCredentials: true,
        headers: {
          "Content-type": "application/json"
        },
        params: {
          accountId: "A#01JAM87DX3V1N8YHYRY6TY9DXA",
          id: "A#01JAM87DX3V1N8YHYRY6TY9DXA"
        }
      });
      console.log("Logged out! Now rerouting: ", axiosResponse);

      router.push("/login");
    } catch (error: any) {
      console.log("error:  ", error.response.data.message);
    };
  };

  return (
    <Navbar maxWidth="full">
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      {/* </NavbarContent> */}
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button 
            color="danger" 
            variant="flat"
            onPress={onLogOut}
          >
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default DeskNavbar;