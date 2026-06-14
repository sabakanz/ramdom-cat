"use client"; // (1) use clientを指定
 
import { useState } from "react"; // 追加
import { fetchImage } from "./fetch-image";

type CatImageProps = {
    url: string;
};

export function CatImage({url}: CatImageProps) {

    const[imageUrl,setImageUrl] = useState<string>(url);

    //画像を取得する関数を定義
    const refreshImage = async () => {
        setImageUrl("");//初期化
        const image = await fetchImage();
        setImageUrl(image.url);
    };



    return (
        <div>
        {/* ボタンの表示 */}
        <button onClick={refreshImage}>ほかの猫も見る</button>
        {/* (5) 画像の表示 */}
        {imageUrl && <img src={imageUrl} />}
        </div>
    );
}