Saya memahami Anda ingin panduan komprehensif untuk mengelola dan mengembangkan portfolio scrollable Anda di masa depan, termasuk detail file yang perlu diedit untuk setiap perubahan elemen website, serta kemungkinan pengembangan konten berdasarkan perkembangan Anda. Saya akan merangkum struktur website saat ini, memberikan panduan untuk mengedit elemen utama (Home, About, Projects, Skill, Contact, Navbar, Footer), dan menyarankan ide pengembangan konten yang relevan dengan minat Anda (misalnya, efek interaktif dari 18 Februari 2025, dan estetika minimalis modern dari 24 Februari 2025). Panduan ini akan mencakup file yang terpengaruh, langkah-langkah, dan antisipasi kebutuhan masa depan, seperti menambah proyek, integrasi 3D, atau fitur interaktif.

### 1. Struktur Website Saat Ini
Website Anda adalah aplikasi Next.js dengan Tailwind CSS dan DaisyUI, menggunakan tema gelap (`--background: #0a0a0a`), scrollable dengan bagian Home, About, Projects, Skill, dan Contact. Berikut elemen utama dan file terkait:
- **Folder**:
  ```
  portfolio/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  ├── components/
  │   ├── NavBar.tsx
  │   ├── Footer.tsx
  │   ├── SkillMarquee.tsx
  ├── styles/
  │   └── globals.css
  ├── public/
  │   └── images/
  │       ├── profile.jpg
  │       ├── project1.jpg
  │       ├── project2.jpg
  │       ├── project3.jpg
  │       ├── project4.jpg
  │       ├── project5.jpg
  │       ├── project6.jpg
  │       ├── project7.jpg
  │       ├── project8.jpg
  ├── package.json
  ├── .gitignore
  ├── README.md
  ```
- **File Utama**:
  - `app/layout.tsx`: Mengatur tema gelap (`data-theme="dark"`) dan struktur HTML dasar.
  - `app/page.tsx`: Berisi semua section (`#home`, `#about`, `#projects`, `#skill`, `#contact`) dengan `"use client"` untuk tab interaktif About Me.
  - `components/NavBar.tsx`: Navbar DaisyUI dengan dropdown mobile elegan (`w-64`, `bg-neutral-900`).
  - `components/SkillMarquee.tsx`: Marquee untuk skill dengan border tipis.
  - `components/Footer.tsx`: Footer minimalis.
  - `styles/globals.css`: Gaya global untuk Tailwind, DaisyUI, marquee, tab, dan proyek.
  - `public/images/`: Gambar untuk proyek dan profil.

### 2. Panduan Mengubah Elemen Website
Berikut panduan untuk mengedit setiap elemen, termasuk file yang terpengaruh dan langkah-langkahnya.

#### 2.1. Home Section (`#home`)
- **Deskripsi Saat Ini**: Hero section dengan judul besar ("Web Designer & Developer"), deskripsi, dan tombol "Learn More" yang menggulir ke `#about`.
- **File Terdampak**: `app/page.tsx`
- **Perubahan Umum dan Cara Mengedit**:
  - **Ubah Teks Judul/Deskripsi**:
    - Buka `app/page.tsx`, cari section `<section id="home">`.
    - Edit teks dalam `<h1>` atau `<p>`:
      ```tsx
      <h1 className="text-6xl md:text-8xl font-bold mb-4">
        [New Title, e.g., "Frontend Developer & UI Designer"]
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        [New Description, e.g., "Crafting seamless digital experiences with React and Tailwind."]
      </p>
      ```
  - **Ganti Tombol**:
    - Ubah teks atau tujuan tombol:
      ```tsx
      <Link href="#projects">
        <button className="btn btn-primary">[New Text, e.g., "See My Work"]</button>
      </Link>
      ```
  - **Tambah Gambar Latar**:
    - Tambahkan gambar di `<section>`:
      ```tsx
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('/images/hero-bg.jpg')] bg-cover">
      ```
    - Tambahkan `hero-bg.jpg` ke `public/images/`.
  - **Tambah Animasi**:
    - Tambahkan kelas Tailwind seperti `animate-fade-in` di `globals.css`:
      ```css
      @keyframes fade-in {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      ```
    - Terapkan di `<h1>` atau `<p>`:
      ```tsx
      <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
      ```

#### 2.2. About Section (`#about`)
- **Deskripsi Saat Ini**: Tab interaktif ("Web Designer", "Developer", "Freelancer") dengan deskripsi peran dan tautan sosial.
- **File Terdampak**:
  - `app/page.tsx` (konten utama dan logika tab).
  - `styles/globals.css` (gaya tab).
- **Perubahan Umum dan Cara Mengedit**:
  - **Ubah Deskripsi Tab**:
    - Di `app/page.tsx`, edit `<p>` dalam `<div className="tab-content">`:
      ```tsx
      <div className={`tab-content ${activeTab === 'designer' ? 'active' : ''}`}>
        <p className="text-lg text-gray-300">
          [New Description, e.g., "Designing intuitive UI with Figma and Tailwind."]
        </p>
      </div>
      ```
  - **Tambah Tab Baru**:
    - Tambahkan tombol tab dan konten di `<div className="tabs tabs-boxed">`:
      ```tsx
      <button
        className={`tab ${activeTab === 'seo' ? 'tab-active' : ''}`}
        onClick={() => setActiveTab('seo')}
      >
        SEO Expert
      </button>
      ```
    - Tambahkan konten tab di `<div className="max-w-2xl mx-auto text-center">`:
      ```tsx
      <div className={`tab-content ${activeTab === 'seo' ? 'active' : ''}`}>
        <p className="text-lg text-gray-300">
          Optimizing websites for top search rankings and traffic.
        </p>
      </div>
      ```
  - **Ubah Tautan Sosial**:
    - Edit `<Link>` di `<div className="mt-8 flex flex-col gap-2 items-center">`:
      ```tsx
      <Link href="https://github.com/yourusername" className="text-gray-300 hover:text-white">GitHub</Link>
      ```
  - **Tambah Gambar Profil**:
    - Tambahkan `<Image>` di `<div className="max-w-2xl mx-auto text-center">`:
      ```tsx
      <div className="mt-8">
        <Image src="/images/profile.jpg" alt="Profile" width={200} height={200} className="mx-auto rounded-full" />
      </div>
      ```
    - Pastikan `profile.jpg` ada di `public/images/`.
  - **Ubah Gaya Tab**:
    - Edit `.tab-content` atau `.tabs` di `globals.css`:
      ```css
      .tabs .tab {
        font-size: 1.25rem; /* Ukuran teks lebih besar */
        border-radius: 0.5rem; /* Sudut lebih halus */
      }
      ```

#### 2.3. Projects Section (`#projects`)
- **Deskripsi Saat Ini**: Grid dengan 8 kotak proyek berukuran acak, latar belakang `bg-neutral-900`.
- **File Terdampak**:
  - `app/page.tsx` (array `projects` dan grid).
  - `styles/globals.css` (gaya `.projects-grid` dan `.project-card`).
  - `public/images/` (gambar proyek).
- **Perubahan Umum dan Cara Mengedit**:
  - **Tambah Proyek Baru**:
    - Tambahkan ke array `projects` di `app/page.tsx`:
      ```tsx
      { id: 9, title: "Project 9", image: "/images/project9.jpg", link: "https://example.com/project9", size: "w-50 h-50" },
      ```
    - Tambahkan `project9.jpg` ke `public/images/`.
  - **Ubah Ukuran Kotak**:
    - Edit `size` di array `projects`:
      ```tsx
      size: "w-72 h-72" // Lebih besar
      ```
    - Atau sesuaikan grid di `globals.css`:
      ```css
      .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Kotak lebih besar */
      }
      ```
  - **Tambah Deskripsi Proyek**:
    - Tambahkan teks di `<Link>` dalam grid:
      ```tsx
      <Link key={project.id} href={project.link} className={`project-card ${project.size}`}>
        <Image src={project.image} alt={project.title} width={300} height={300} className="w-full h-full" />
        <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-2 text-center text-white">
          {project.title}
        </div>
      </Link>
      ```
  - **Ubah Efek Hover**:
    - Edit `.project-card:hover` di `globals.css`:
      ```css
      .project-card:hover {
        transform: scale(1.1); /* Zoom lebih besar */
        box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2); /* Bayangan lebih kuat */
      }
      ```
  - **Ganti Latar Belakang**:
    - Ubah `bg-neutral-900` di `<section id="projects">`:
      ```tsx
      <section id="projects" className="py-16 bg-gray-950">
      ```

#### 2.4. Skill Section (`#skill`)
- **Deskripsi Saat Ini**: Dua marquee (kanan dan kiri) dengan skill berborder tipis, tanpa gap.
- **File Terdampak**:
  - `app/page.tsx` (array `skillsTop` dan `skillsBottom`).
  - `components/SkillMarquee.tsx` (logika marquee).
  - `styles/globals.css` (gaya `.skill-item`).
- **Perubahan Umum dan Cara Mengedit**:
  - **Tambah Skill**:
    - Tambahkan ke `skillsTop` atau `skillsBottom` di `app/page.tsx`:
      ```tsx
      { name: 'Next.js', color: 'border-indigo-500' },
      ```
  - **Ubah Warna Border**:
    - Edit `color` di `skillsTop`/`skillsBottom`:
      ```tsx
      color: 'border-red-500'
      ```
    - Atau ubah `.skill-item` di `globals.css`:
      ```css
      .skill-item {
        border-color: #ff5555; /* Warna kustom */
      }
      ```
  - **Ubah Kecepatan Marquee**:
    - Edit `animation` di `.animate-marquee-right`/`left` di `globals.css`:
      ```css
      .animate-marquee-right {
        animation: marquee-right 15s linear infinite; /* Lebih cepat */
      }
      ```
  - **Ganti Marquee dengan Grid**:
    - Ganti `<SkillMarquee>` di `app/page.tsx` dengan grid:
      ```tsx
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsTop.concat(skillsBottom).map((skill, index) => (
          <div key={index} className={`skill-item ${skill.color}`}>
            {skill.name}
          </div>
        ))}
      </div>
      ```
  - **Tambah Animasi Hover**:
    - Edit `.skill-item:hover` di `globals.css`:
      ```css
      .skill-item:hover {
        transform: scale(1.1);
        border-color: #ffffff;
      }
      ```

#### 2.5. Contact Section (`#contact`)
- **Deskripsi Saat Ini**: Formulir dengan field Nama, Email, Pesan, latar belakang `bg-neutral-900`.
- **File Terdampak**:
  - `app/page.tsx` (formulir).
  - `styles/globals.css` (gaya formulir).
- **Perubahan Umum dan Cara Mengedit**:
  - **Ubah Field Formulir**:
    - Tambahkan field di `<form>`:
      ```tsx
      <div className="mb-4">
        <label className="block text-lg mb-2">Phone</label>
        <input type="tel" name="phone" className="input input-bordered w-full" />
      </div>
      ```
  - **Ganti Penyedia Formulir**:
    - Ubah `action` ke penyedia lain (misalnya, Netlify Forms):
      ```tsx
      <form action="/api/contact" method="POST" className="max-w-md mx-auto">
      ```
    - Buat endpoint API di `app/api/contact/route.ts` jika diperlukan.
  - **Tambah Teks Statis**:
    - Tambahkan info kontak di atas formulir:
      ```tsx
      <p className="text-lg text-gray-300 mb-4">
        Email: your.email@example.com | Phone: +123456789
      </p>
      ```
  - **Ubah Gaya Formulir**:
    - Tambahkan gaya di `globals.css`:
      ```css
      .input, .textarea {
        border-color: #ffffff; /* Border putih */
        background-color: #1a1a1a; /* Latar gelap */
      }
      ```
  - **Ganti Latar Belakang**:
    - Ubah `bg-neutral-900` di `<section id="contact">`:
      ```tsx
      <section id="contact" className="py-16 bg-gray-950">
      ```

#### 2.6. Navbar
- **Deskripsi Saat Ini**: Navbar DaisyUI dengan dropdown mobile elegan (`w-64`, `bg-neutral-900`) dan tautan ke `#home`, `#about`, `#projects`, `#skill`, `#contact`.
- **File Terdampak**:
  - `components/NavBar.tsx` (struktur navbar).
  - `styles/globals.css` (gaya dropdown).
- **Perubahan Umum dan Cara Mengedit**:
  - **Tambah Tautan**:
    - Tambahkan `<li>` di `<ul>` untuk desktop dan dropdown:
      ```tsx
      <li><Link href="#blog" className="text-lg">Blog</Link></li>
      ```
    - Pastikan section `#blog` ada di `app/page.tsx`.
  - **Ubah Logo**:
    - Edit `<Link>` di `navbar-start`:
      ```tsx
      <Link href="#home" className="btn btn-ghost text-xl">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
      </Link>
      ```
    - Tambahkan `logo.png` ke `public/images/`.
  - **Ubah Gaya Dropdown**:
    - Edit `<ul>` di dropdown:
      ```tsx
      <ul tabIndex={0} className="menu menu-md dropdown-content bg-neutral-950 rounded-xl z-[1] mt-3 w-72 p-4 shadow-xl">
      ```
    - Atau ubah animasi di `globals.css`:
      ```css
      .dropdown-content {
        transition: opacity 0.5s ease, transform 0.5s ease; /* Animasi lebih lambat */
      }
      ```
  - **Tambah Efek Sticky**:
    - Sudah fixed (`fixed top-0`), tapi bisa tambahkan bayangan saat gulir:
      ```css
      .navbar {
        transition: box-shadow 0.3s ease;
      }
      .navbar.scrolled {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      }
      ```
    - Tambahkan JavaScript di `app/page.tsx`:
      ```tsx
      useEffect(() => {
        const navbar = document.querySelector('.navbar')
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled')
          } else {
            navbar.classList.remove('scrolled')
          }
        })
      }, [])
      ```

#### 2.7. Footer
- **Deskripsi Saat Ini**: Minimalis dengan teks hak cipta.
- **File Terdampak**: `components/Footer.tsx`
- **Perubahan Umum dan Cara Mengedit**:
  - **Tambah Tautan**:
    - Edit `<footer>`:
      ```tsx
      <footer className="text-gray-300 text-center p-4">
        <p>© 2025 [Your Name]. All rights reserved.</p>
        <div className="mt-2">
          <Link href="https://x.com/yourusername" className="mx-2">Twitter/X</Link>
          <Link href="https://linkedin.com/in/yourusername" className="mx-2">LinkedIn</Link>
        </div>
      </footer>
      ```
  - **Ubah Teks**:
    - Edit `<p>`:
      ```tsx
      <p>Built with ♥ by [Your Name]</p>
      ```
  - **Tambah Ikon**:
    - Tambahkan SVG atau gambar:
      ```tsx
      <footer className="text-gray-300 text-center p-4">
        <p>© 2025 [Your Name]. All rights reserved.</p>
        <Image src="/images/logo.png" alt="Logo" width={30} height={30} className="mx-auto mt-2" />
      </footer>
      ```

#### 2.8. Gaya Global
- **Deskripsi Saat Ini**: Tema gelap, Tailwind, DaisyUI, animasi marquee, dan tab.
- **File Terdampak**: `styles/globals.css`
- **Perubahan Umum dan Cara Mengedit**:
  - **Ubah Warna Tema**:
    - Edit `:root` di `globals.css`:
      ```css
      :root {
        --background: #1a1a1a; /* Abu-abu gelap */
        --foreground: #ffffff;
      }
      ```
  - **Ganti Font**:
    - Tambahkan font di `body`:
      ```css
      body {
        font-family: 'Inter', Arial, Helvetica, sans-serif;
      }
      ```
    - Impor di `app/layout.tsx`:
      ```tsx
      <html lang="en" data-theme="dark">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet" />
        </head>
        <body>{children}</body>
      </html>
      ```
  - **Tambah Animasi Global**:
    - Tambahkan keyframes:
      ```css
      @keyframes slide-up {
        0% { transform: translateY(50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .animate-slide-up {
        animation: slide-up 0.5s ease-out;
      }
      ```
    - Terapkan di section, misalnya di `app/page.tsx`:
      ```tsx
      <section id="home" className="min-h-screen flex items-center justify-center animate-slide-up">
      ```

### 3. Kemungkinan Pengembangan di Masa Depan
Berdasarkan perkembangan Anda dan minat (efek interaktif, estetika modern, fleksibilitas proyek), berikut ide pengembangan konten dan panduan implementasinya.

#### 3.1. Menambah Blog atau Artikel
- **Tujuan**: Menampilkan keahlian melalui artikel tentang web design, coding, atau SEO.
- **Implementasi**:
  - **File Baru**: Buat `app/blog/page.tsx` untuk halaman blog dan `app/blog/[slug]/page.tsx` untuk artikel individu.
  - **Konten**:
    ```tsx
    // app/blog/page.tsx
    import Link from 'next/link'
    export default function Blog() {
      const posts = [
        { slug: 'first-post', title: 'My First Blog Post' },
        { slug: 'web-design-tips', title: 'Top Web Design Tips' },
      ]
      return (
        <section id="blog" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card bg-neutral-900 p-4">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )
    }
    ```
  - **Tambah Navigasi**:
    - Tambahkan tautan di `components/NavBar.tsx`:
      ```tsx
      <li><Link href="/blog" className="text-lg">Blog</Link></li>
      ```
  - **File Terdampak**:
    - `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`.
    - `components/NavBar.tsx`.
    - `public/images/` untuk gambar artikel.
  - **Masa Depan**: Gunakan CMS seperti Contentful untuk mengelola artikel tanpa coding.

#### 3.2. Integrasi Elemen 3D
- **Tujuan**: Menambahkan model 3D interaktif di `#home` atau `#skill`, sesuai minat Anda pada elemen 3D (24 Februari 2025).
- **Implementasi**:
  - **Instal Three.js**:
    ```bash
    npm install three @react-three/fiber @react-three/drei
    ```
  - **Buat Komponen 3D**:
    ```tsx
    // components/ThreeScene.tsx
    "use client"
    import { Canvas } from '@react-three/fiber'
    import { OrbitControls, Sphere } from '@react-three/drei'

    export default function ThreeScene() {
      return (
        <Canvas style={{ height: '400px' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial color="blue" />
          </Sphere>
          <OrbitControls />
        </Canvas>
      )
    }
    ```
  - **Tambah ke Section**:
    - Di `app/page.tsx`, tambahkan di `#home`:
      ```tsx
      import ThreeScene from '@/components/ThreeScene'
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <ThreeScene />
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Web Designer & Developer
          </h1>
        </div>
      </section>
      ```
  - **File Terdampak**:
    - `components/ThreeScene.tsx` (baru).
    - `app/page.tsx`.
    - `package.json` (dependensi).
  - **Masa Depan**: Tambahkan model 3D kustom (misalnya, logo Anda) menggunakan Blender dan GLTF.

#### 3.3. Efek Interaktif Tambahan
- **Tujuan**: Menambahkan animasi seperti kembang api (18 Februari 2025) di `#home` atau `#projects`.
- **Implementasi**:
  - **Instal Framer Motion**:
    ```bash
    npm install framer-motion
    ```
  - **Tambah Animasi**:
    - Di `app/page.tsx`, bungkus elemen dengan `motion`:
      ```tsx
      import { motion } from 'framer-motion'
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Web Designer & Developer
      </motion.h1>
      ```
  - **Efek Kembang Api**:
    - Gunakan library seperti `react-confetti`:
      ```bash
      npm install react-confetti
      ```
    - Tambahkan di `#home`:
      ```tsx
      import Confetti from 'react-confetti'
      <section id="home" className="min-h-screen relative">
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <div className="text-center">
          <h1>...</h1>
        </div>
      </section>
      ```
  - **File Terdampak**:
    - `app/page.tsx`.
    - `package.json` (dependensi).
  - **Masa Depan**: Tambahkan interaksi seperti hover untuk memicu animasi di proyek.

#### 3.4. Galeri Proyek Interaktif
- **Tujuan**: Mengganti grid statis dengan galeri interaktif (misalnya, modal atau carousel).
- **Implementasi**:
  - **Buat Komponen Modal**:
    ```tsx
    // components/ProjectModal.tsx
    "use client"
    import { useState } from 'react'
    import Image from 'next/image'

    export default function ProjectModal({ project }) {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <>
          <div className="project-card cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image src={project.image} alt={project.title} width={300} height={300} className="w-full h-full" />
          </div>
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
              <div className="bg-neutral-900 p-4 rounded-xl max-w-2xl">
                <Image src={project.image} alt={project.title} width={600} height={600} className="w-full" />
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="text-gray-300">Project description here.</p>
                <button className="btn btn-primary mt-4" onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </div>
          )}
        </>
      )
    }
    ```
  - **Gunakan di Projects**:
    - Di `app/page.tsx`, ganti grid:
      ```tsx
      import ProjectModal from '@/components/ProjectModal'
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectModal key={project.id} project={project} />
        ))}
      </div>
      ```
  - **File Terdampak**:
    - `components/ProjectModal.tsx` (baru).
    - `app/page.tsx`.
  - **Masa Depan**: Tambahkan video demo proyek di modal.

#### 3.5. Integrasi API atau Data Dinamis
- **Tujuan**: Mengelola proyek atau skill melalui API (misalnya, CMS atau database).
- **Implementasi**:
  - **Gunakan CMS seperti Sanity**:
    ```bash
    npm install @sanity/client
    ```
  - **Buat Klien Sanity**:
    ```tsx
    // lib/sanity.ts
    import { createClient } from '@sanity/client'
    export const client = createClient({
      projectId: 'your-project-id',
      dataset: 'production',
      useCdn: true,
    })
    ```
  - **Ambil Data Proyek**:
    - Di `app/page.tsx`, ganti array statis:
      ```tsx
      import { client } from '@/lib/sanity'
      async function getProjects() {
        return await client.fetch('*[_type == "project"]{id, title, image, link, size}')
      }
      export default async function Home() {
        const projects = await getProjects()
        return (
          <section id="projects" className="py-16 bg-neutral-900">
            <div className="projects-grid">
              {projects.map((project) => (
                <Link key={project.id} href={project.link} className={`project-card ${project.size}`}>
                  <Image src={project.image} alt={project.title} width={300} height={300} className="w-full h-full" />
                </Link>
              ))}
            </div>
          </section>
        )
      }
      ```
  - **File Terdampak**:
    - `lib/sanity.ts` (baru).
    - `app/page.tsx`.
    - `.env.local` untuk kredensial Sanity.
  - **Masa Depan**: Tambahkan dashboard