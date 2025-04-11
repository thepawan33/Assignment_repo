# 🎓 Student ID Card Generator

A modern React web application to generate and download customized student ID cards with personal details, photo, and QR code. Includes multiple templates and full download support in image format.

## Project Link - [https://ps-studentid.netlify.app/]

## ✨ Features

- ✅ Student data entry with live preview
- ✅ Multiple ID card templates (switch between designs)
- ✅ QR code generation with student data
- ✅ Upload image and convert to base64 (avoids CORS issues)
- ✅ Download ID card as PNG
- ✅ State management with Redux Toolkit
- ✅ Clean responsive UI using Tailwind CSS

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **QR Code**: `qrcode.react`
- **Image to PNG**: `html-to-image`, `file-saver`

## 🛆 Installation

```bash
git clone https://github.com/thepawan33/Assignment_repo.git/Student_Id_Gen
npm install
npm run dev
```

## ⚙️ Production Build

```bash
npm run build
```

Then deploy the `dist/` folder to any hosting platform:

- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages

## 📁 Folder Structure

```
public/
└── assets/
    ├── template_1.png
    └── template_2.png

src/
├── App.jsx
├── index.css
├── main.jsx
├── components/
│   ├── DropDownContainer.jsx
│   ├── Form.jsx
│   ├── FormContainer.jsx
│   ├── Home.jsx
│   ├── IDCard.jsx
│   ├── InputCollection.jsx
│   ├── Preview.jsx
│   ├── reusable/
│   │   ├── DropDown.jsx
│   │   ├── ImageSelector.jsx
│   │   ├── InputField.jsx
│   │   ├── MultiSelector.jsx
│   │   └── QRGen.jsx
│   └── Templates/
│       ├── TemplateOne/
│       │   ├── TempInfo.jsx
│       │   └── TemplateOne.jsx
│       └── TemplatesTwo/
│           ├── TemplateTwo.jsx
│           └── TempTwoInfo.jsx
├── redux/
│   ├── store.js
│   └── slice/
│       └── formSlice.js
└── utils/
    ├── rawData.js
    └── theme.js
```

## 🧠 State Management

This project uses **Redux Toolkit** for storing student info and managing template switching:

```js
const info = useSelector((state) => state.form.idData);
```

Form values are stored globally and used across templates and components.

## 📑 License

Free for educational and personal use.

---

### 👨‍💻 Author

Built with 💙 by **Pavan Singh**  
📧 thepawan33@gmail.com
