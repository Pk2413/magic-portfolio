import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Prayoga",
  middleName: "Kusdiana",
  lastName: "Ikhsani",
  get name() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bahasa Indonesia", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Pk2413",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/prayoga-ikhsani-3a088324a",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/1kh_san1/",
  },
  {
    name: "Email",
    icon: "email",
    link: "Ananda.aa70@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>WEBSITE DEVELOPER</>,
  subline: (
    <>
      Website Fullstack Developer <InlineCode>BOOTSTRAP, LARAVEL, NEXTJS(TRIAL), REACT(TRIAL)</InlineCode>

    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Saya adalah Mahasiswa dari Politeknik Negeri Jember. Saat ini saya sedang menjalani kuliah semester 4(empat).

        Saya bertempat tinggal di Nganjuk, Jawa Timur, Indonesia. saya lahir pada bulan agustus pada tahun 2003.

        Hobi saya adalah membaca komik, ngoding di saat senggang, serta menjelajah atau mempelajari sesuatu hal yang saya belum tau pada saat ini.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "KLIKK",
        timeframe: "2022 - 2023",
        role: (
          <>
          Developer <InlineCode>JAVA</InlineCode>
          </>
        ),
        achievements: [
         <>
         aplikasi untuk kasir agar mempermudah dalam menghitung dan mencatat transaksi
         </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
         
        ],
      },
      {
        company: "PRESS",
        timeframe: "2023 - 2024",
        role: (
          <>
          Fullstack Web developer and Fullstack mobile developer<InlineCode>(JAVA)</InlineCode>
          </>
        ),
        achievements: [
          <>
           Aplikasi untuk mempermudah dalam pembuatan permintaan surat untuk staff desa dan masyarakat diDesa Pesudukuh
          </>,
        ],
        images: [
          {
            src: "/images/projects/image.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/image1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Politeknik Negeri Jember Kampus 3",
        description: <>Teknik Informatika</>,
      },
      {
        name: "SMA 1 Negeri Berbek",
        description: <>IPA</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Fullstack Web Developer",
        description: <>Laravel dan Bootstrap</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/image.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/image1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

