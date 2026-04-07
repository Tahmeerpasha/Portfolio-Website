'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ArrowRight, FileText } from 'lucide-react';
import config from '../public/data/config';
import profileImg from '../public/assets/images/Tahmeer.jpeg';

const stats = [
    { value: '10k+', label: 'events/day handled' },
    { value: '1M+', label: 'records processed' },
    { value: '30%', label: 'latency reduction' },
    { value: '15%', label: 'infra cost saved' },
];

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center pt-16"
            aria-label="Introduction"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
                <div className="max-w-3xl animate-slide-up">
                    {/* Top section: Avatar + Label */}
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border shrink-0">
                            <Image
                                src={profileImg}
                                alt="Tahmeer Pasha"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                        <div>
                            <p className="section-label mb-1">Available for SDE roles</p>
                            <p className="text-body font-medium">{config.name}</p>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-heading mb-4">
                        Backend engineer
                        <br />
                        <span className="text-accent">building systems that scale.</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg text-muted max-w-2xl mt-6 leading-relaxed">
                        {config.summary}
                    </p>

                    {/* Stats strip */}
                    <div className="flex flex-wrap gap-6 mt-10">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-2xl font-bold text-heading font-mono">
                                    {stat.value}
                                </span>
                                <span className="text-xs text-muted mt-0.5">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-10">
                        <Link href="/#projects" className="btn-primary">
                            View My Work
                            <ArrowRight size={16} />
                        </Link>
                        <a
                            href={config.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            <FileText size={15} />
                            Download Resume
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-4 mt-10">
                        <a
                            href={config.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <FaLinkedinIn size={19} />
                        </a>
                        <a
                            href={config.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <FaGithub size={19} />
                        </a>
                        <a
                            href={config.social.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LeetCode profile"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <SiLeetcode size={19} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
