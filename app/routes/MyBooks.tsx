import React, { useState } from 'react';
import MyFooter from "./templates/myfooter";
import MyMenu from "./templates/mymenu";

// Mock data สำหรับรายการหนังสือ
const books = [
    {
        href : "https://th.wikipedia.org/wiki/%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%B4%E0%B8%A0%E0%B8%9E%E0%B9%84%E0%B8%97%E0%B8%97%E0%B8%B1%E0%B8%99",
        Code: "001",
        Title: "Attack on Titan(ผ่าพิภพไททัน)",
        Cover: "https://upload.wikimedia.org/wikipedia/th/3/32/Attack_on_Titan%2C_volume_1_thai_version.jpg",
        Description: "ผ่าพิภพไททัน",
        Category: 1,
        Author: "Hajime Isayama",
        Publishing: "JJPong",
        Price: "300 THB",
        Bestsellers: false,
        Suggestions: true,
    },
   
    {
        href : "https://www.amazon.com/Lonely-Planets-Ultimate-Travel-List/dp/1788689135",
        Code: "002",
        Title: "Lonely Planet's Ultimate Travel List",
        Cover: "https://m.media-amazon.com/images/I/410BBfodzDL._SX342_SY445_.jpg",
        Description: "Hardcover – Illustrated, October 20, 2020",
        Category: 2,
        Author: "Lonely Planet",
        Publishing: "Pong JJ",
        Price: "650 THB",
        Bestsellers: false,
        Suggestions: true,
    },
    {
        href : "https://www.elizabethgilbert.com/books/eat-pray-love/",
        Code: "003",
        Title: "Eat Pray Love",
        Cover: "https://www.elizabethgilbert.com/wp-content/uploads/2012/07/EPL10thAnniversary_Cover.jpg",
        Description: "เรื่องราวการเดินทางของผู้เขียนที่ออกค้นหาตัวเองผ่าน 3 ประเทศ (อิตาลี, อินเดีย, และอินโดนีเซีย) โดยเน้นเรื่องอาหาร จิตวิญญาณ และความรัก",
        Category: 3,
        Author: "Elizabeth Gilbert",
        Publishing: "Godzilla",
        Price: "390 THB",
        Bestsellers: true,
        Suggestions: true,
    },
    {
        href : "https://www.asiabooks.com/th/walk-in-the-woods-a-309741.html",
        Code: "004",
        Title: "A Walk in the Woods",
        Cover: "https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/9/7/9781784161446.jpg",
        Description: "หนังสือเล่าเรื่องการผจญภัยของผู้เขียนที่เดินป่าบนเส้นทาง Appalachian Trail ในสหรัฐฯ ผสมผสานทั้งความสนุกสนานและการอนุรักษ์ธรรมชาติ",
        Category: 4,
        Author: "Bill Bryson",
        Publishing: "Bert wan wang wang",
        Price: "478 THB",
        Bestsellers: false,
        Suggestions: true,
    },
    {
        href : "https://www.amazon.com/100-Wonders-World-Michael-Hoffman/dp/1405494778",
        Code: "005",
        Title: "100 Wonders of the World",
        Cover: "https://m.media-amazon.com/images/I/81B4Q4lN8IL._SY466_.jpg",
        Description: "หนังสือรวมภาพถ่ายและข้อมูลเกี่ยวกับสิ่งมหัศจรรย์จากทั่วโลก ตั้งแต่แหล่งมรดกโลกไปจนถึงสถานที่ที่มีความโดดเด่นในวัฒนธรรม",
        Category: 5,
        Author: "Michael Hoffman",
        Publishing: "Thong Loong",
        Price: "199 THB",
        Bestsellers: false,
        Suggestions: true,
    },
];

// Component สำหรับแสดงสถานะ "แนะนำ" หรือ "ขายดี"
const StatusCheck = ({ isBestseller, isSuggestion }: { isBestseller: boolean; isSuggestion: boolean }) => {
    return (
        <div>
            {isBestseller && <span>{'Best Selling!'}</span>}
            {isSuggestion && <span>{'recommend'}</span>}
        </div>
    );
};


const BookList = () => {
    const [filter, setFilter] = useState<'all' | 'bestseller' | 'suggestion'>('all'); // สถานะการกรอง
    
    // กรองรายการหนังสือตามประเภท
    const filteredBooks = books.filter(book => {
        if (filter === 'all') return true;
        if (filter === 'bestseller' && book.Bestsellers) return true;
        if (filter === 'suggestion' && book.Suggestions) return true;
        return false;
    });

    // Map ข้อมูลหนังสือเพื่อแสดงใน UI
    const listItems = filteredBooks.map((book, index) => (
        <div className="m-3" key={index}>
            <a
                href={book.href} // ใช้ลิงก์ที่ถูกต้องจากข้อมูล
                target="_blank" // เปิดในหน้าต่างใหม่
                rel="noopener noreferrer" // ป้องกันปัญหาด้านความปลอดภัย
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <img src={book.Cover} alt={book.Title} className="mb-3 w-full h-50 object-cover rounded-lg" />
                <b className="text-base">
                    <StatusCheck isBestseller={book.Bestsellers} isSuggestion={book.Suggestions} />
                </b>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.Title + " (รหัส: " + book.Code + ")"}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{book.Description}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>ผู้แต่ง:</strong> {book.Author}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>สำนักพิมพ์:</strong> {book.Publishing}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>ราคา:</strong> {book.Price}
                </p>
            </a>
        </div>
    ));

    return (
        <div className="m-3">
            <MyMenu />
            <div className="mb-4">
                {/* ปุ่มกรองข้อมูล */}
                <button onClick={() => setFilter('all')} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">All</button>
                <button onClick={() => setFilter('bestseller')} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">Best Selling</button>
                <button onClick={() => setFilter('suggestion')} className="mr-2 px-4 py-2 bg-green-500 text-white rounded">recommend</button>
            </div>
            <strong className="text-xl">หนังสือแนะนำ</strong>
            <br />
            <strong className="text-xl">ข้อมูลอ้างอิงมาจาก https://www.amazon.com/100-Wonders-World-Michael-Hoffman/dp/1405494778 
            <br/>
             https://th.wikipedia.org/wiki/%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%B4%E0%B8%A0%E0%B8%9E%E0%B9%84%E0%B8%97%E0%B8%97%E0%B8%B1%E0%B8%99
            </strong>
            {listItems}
            <MyFooter />
        </div>
    );
};

export default BookList;