import { DialogContent, DialogTitle, DialogDescription } from "../../shared/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../shared/ui/tabs";
import { t } from "i18next";
import { Button } from "../../shared/ui/button";
import { DialogHeader } from "../../shared/ui/dialog";
import { Input } from "../../shared/ui/input";
import { submitLogin, submitRegister } from "./AuthAPI";

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
                                        <Input type="email" name="email" placeholder="Email" />
                                        <Input type="password" name="password" placeholder="Password" />
                                        <Button className="mt-3">{t("buttonLoginInSystem")}</Button>
                                        </form>
                                    </TabsContent>
                                    <TabsContent value="password">                                        
                                    <form className="flex flex-col gap-y-1 mb-2"  onSubmit={submitRegister}>
                                        <Input type="text" className="m-to-2" name="username" placeholder="Username" />
                                        <Input type="email" name="email" placeholder="Email"/>
                                        <Input type="password" name="password" placeholder="Password"/>
                                        <Input type="password" name="repPassword" placeholder="Password"/>
                                        <Button className="mt-3">{t("buttonRegInSystemStep1")}</Button>
                                        </form>
                                    </TabsContent>
                                </Tabs>
                        </DialogHeader>
                    </DialogContent>
    )
} 
export default AuthForm;