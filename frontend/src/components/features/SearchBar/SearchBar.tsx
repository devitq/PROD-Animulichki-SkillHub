import { useTranslation } from "react-i18next";


import less from "./SearchBar.module.less"
import { Input } from "../../shared/ui/input";
import { Search } from "lucide-react";


const SearchBar = ({ title = "" }: { title: string }) => {
    // const { t } = useTranslation();


    
    return (
        <nav className={less["search-bar"]}>
            <h3 className={less['title-content']}>{title}</h3>
            <Search/>
            <Input className={less["input-search"]} placeholder="Введите что-то для поиска"></Input>
        </nav>
    )
}
export default SearchBar;