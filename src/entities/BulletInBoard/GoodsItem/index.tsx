import React, { FC } from "react"; 
import style from './goodsItem.module.scss'
import dots from '../../../assets/svg/dots.svg'
import { IData } from "../../../mocks/data";


interface IGoodsItem {
    item:IData
}
const GoodsItem:FC<IGoodsItem> =({item})=>{
    return (<div className={style.goods_item_wpapper}>
        <div className={style.goods_item}> <div className={style.item}>{item.name}</div>
        <div className={style.item}>{item.category}</div>
        <div className={style.item}>{item.date}</div>
        <div className={style.item}>{item.publicated? "Да" : "Нет"}</div>
        <div className={style.menu_dots}><img src={dots}></img></div>
        </div>
        
       
    </div>)
}

export default GoodsItem