import React from 'react';
import Image from "gatsby-image"

export default ({ avatar, author, description }) => (
  <>
    <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center -mt-16">
          <Image className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" fixed={avatar} alt={author}/>
        </div>
        <div>
          <h2 className="flex justify-center mt-6 text-gray-800 text-l font-semibold">
            {description}
          </h2>
          <p className="flex justify-center mt-2 text-gray-600">
            <p>中野区在住の中野です。大阪生まれ大阪育ちですが就職のタイミングで上京しました。食いっぱぐれないようにすることをモットーに生存戦略を常に考えている元ネトゲ廃人現フルリモートwebエンジニア。Twitterでメンターとして駆け出しエンジニアたちをサポートしています。最近の関心事はDDDとScrum。いずれ起業することを考えてプロダクトを作成中。このブログでは生存戦略を考える上で試行錯誤した内容を記録していきます。</p>
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">{author}</a>
        </div>
    </div>
  </>
);