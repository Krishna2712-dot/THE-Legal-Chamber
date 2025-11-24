"use client";
import Link from "next/link";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "motion/react";
import React from "react";

const images = [
  "/media/03-Expertise_1_0.jpg",
  "/media/gavel-scales-justice-law-books_23-2151998158.jpg",
  "/media/justice-is-the-antidote-to-chaos-scaled.jpg",
];

const highlights = [
  "Strategic litigation, arbitration, and advisory across India",
  "Responsive counsel tailored to your business objectives",
  "Experienced team of advocates, solicitors, and arbitrators",
];

function About() {
  return (
    <ImagesSlider
      className="relative h-[42rem] md:h-[46rem]"
      images={images}
      overlayClassName="bg-gradient-to-b from-black/70 via-black/55 to-black/25"
      autoplay
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-40 mx-auto max-w-3xl px-4 text-center text-white"
      >
        <motion.h2
          className="text-3xl font-semibold tracking-tight md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Advancing Justice with Precision and Care
        </motion.h2>
        <motion.p
          className="mt-4 text-base md:text-lg text-white/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Legal Chambers delivers comprehensive, high-value legal solutions, combining deep legal
          insight with commercial pragmatism for individuals, businesses, and institutions nationwide.
        </motion.p>
        <motion.ul
          className="mt-8 grid gap-3 text-left md:grid-cols-3 md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {highlights.map((item) => (
            <motion.li
              key={item}
              className="rounded-lg bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur-md md:text-base"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <Link
            href="/our-team"
            className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            Meet Our Team
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/50 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}

export default About;
