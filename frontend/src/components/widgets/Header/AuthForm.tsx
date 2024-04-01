import { DialogContent, DialogTitle, DialogDescription, Dialog, DialogTrigger } from "../../shared/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../shared/ui/tabs";
import { t } from "i18next";
import { Button } from "../../shared/ui/button";
import { DialogHeader } from "../../shared/ui/dialog";
import { Input } from "../../shared/ui/input";
import { submitLogin, submitRegister } from "./AuthAPI";
import { Textarea } from "../../shared/ui/textarea";

const AuthForm = () => {


    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{t("entrance")}</DialogTitle>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">{t("login")}</TabsTrigger>
                        <TabsTrigger value="password">{t("registration")}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" >
                        <form className="flex flex-col gap-y-1" onSubmit={submitLogin}>
                        <Input type="text" name="username" placeholder="Username" />
                            <Input type="password" name="password" placeholder="Password" />
                            <Button className="mt-3">{t("buttonLoginInSystem")}</Button>
                        </form>
                    </TabsContent>
                    <TabsContent value="password">
                        <form className="flex flex-col gap-y-1 mb-2" onSubmit={submitRegister}>
                            <Input type="text" name="username" placeholder="Username" />
                            <Input type="email" name="email" placeholder="Email" />
                            <Input type="password" name="password" placeholder="Password" />
                            <Input type="password" placeholder="Password" />
                            <Button> qrefqwfqw</Button>
                            <Dialog>
                                <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">{t("buttonRegInSystemStep1")}
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Еще немного!</DialogTitle>
                                        <Tabs defaultValue="account" className="w-[400px]">
                                            <DialogDescription>
                                            <Input type="text" name="first_name" placeholder="first name" />
                                            <Input type="text" name="last_name" placeholder="last name" />
                                            <Input type="number" name="experience" placeholder="experience" />
                                                <Input type="text" name="country" placeholder="country" />
                                                <Input type="text" name="city" placeholder="city" />
                                                <Input type="date" name="birthday" placeholder="birthday" />
                                                <Textarea name="bio" placeholder="bio" />

                                            </DialogDescription>
                                        </Tabs>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </form>

                    </TabsContent>
                </Tabs>
            </DialogHeader>
        </DialogContent>
    )
}
export default AuthForm;