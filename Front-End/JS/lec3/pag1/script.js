const imagesArray = [
  "https://picsum.photos/id/10/800/600", // طبيعة / جبال
  "https://picsum.photos/id/16/800/600", // مسار خريفي
  "https://picsum.photos/id/28/800/600", // غابة وضباب
  "https://picsum.photos/id/43/800/600", // معالم أثرية
  "https://picsum.photos/id/48/800/600", // كمبيوتر ومكتب
  "https://picsum.photos/id/54/800/600", // أوراق شجر
  "https://picsum.photos/id/57/800/600", // رصيف ومارة
  "https://picsum.photos/id/103/800/600", // تفاصيل الطبيعة
  "https://picsum.photos/id/119/800/600", // كمبيوتر محمول
  "https://picsum.photos/id/133/800/600", // سيارة كلاسيكية
  "https://picsum.photos/id/146/800/600", // جبال غامقة
  "https://picsum.photos/id/160/800/600", // أشجار وهاتف
  "https://picsum.photos/id/180/800/600", // كمبيوتر محمول وأدوات مكتبية
  "https://picsum.photos/id/201/800/600", // واجهة مبنى حديث
  "https://picsum.photos/id/225/800/600", // كوب قهوة ومكتب
  "https://picsum.photos/id/249/800/600", // لقطة طبيعية واسعة
  "https://picsum.photos/id/250/800/600", // كاميرا تصوير كلاسيكية
  "https://picsum.photos/id/319/800/600", // تصميم داخلي / منزل
  "https://picsum.photos/id/367/800/600", // غروب الشمس
  "https://picsum.photos/id/404/800/600"  // لقطة مقربة من الطبيعة
];
const button = document.querySelector("button");
const image = document.querySelector("img");
image.src = imagesArray[0];
let index = 0;
button.onclick = _=> {
    index++;
    if (imagesArray.length <= index) {
        index = 0;
    }
        image.src = imagesArray[index];
        image.alt = "Image " + (index + 1);
    }
;