// Codes by Mahdi Tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import { useLoginState } from "../store";

// Creating and exporting app page as default
export default function AppPage():ReactNode {
    // Defining login state
    const { isLoggedIn } = useLoginState();

    // Returning JSX
    return (
        <div className="container-no-flex">
            <div className="w-full">
                {
                    (isLoggedIn)
                        ? (
                            <div className="mb-[30px] bg-blue lg:p-[20px] p-[15px] lg:rounded-[20px] rounded-[15px]">
                                <h6 className="text-center font-bold text-orange lg:text-[30px] text-[16px] mb-[20px]">Thanks for logging in</h6>
                                <iframe 
                                    className="lg:w-[50%] w-full h-[300px] lg:rounded-[20px] rounded-[10px] lg:mx-auto"
                                    src="https://www.youtube.com/embed/p-msTt8PkoE?si=mUaA46C468GkEVzJ" 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                />
                            </div>
                        ) : false
                }
                <h1 className="title">Life:</h1>
                <p className="paragraph">Life is a tapestry woven with threads of wonder, a masterpiece that unfolds with each passing moment. In this vast and intricate mosaic, every individual is a unique brushstroke, contributing to the richness of the overall canvas. From the gentle caress of a morning breeze to the kaleidoscope of colors in a sunset sky, life is a symphony of experiences that captivate our senses.</p>
                <p className="paragraph">The beauty of life lies not only in its grandeur but also in the simplicity of everyday moments. The laughter shared with friends, the warmth of a loved one's embrace, and the taste of a delicious meal are all small fragments that collectively compose the mosaic of joy. Life's wonders are scattered throughout our journey, waiting to be discovered in the ordinary and cherished in the extraordinary.</p>
                <p className="paragraph">Moreover, the journey of life is marked by resilience and growth. Challenges and obstacles become stepping stones, shaping our character and molding our inner strength. Life's unpredictability adds a sense of adventure, making each day a new chapter to explore. The pursuit of dreams, the overcoming of hurdles, and the joy of accomplishment are chapters that highlight the narrative of a fulfilling life.</p>
                <p className="paragraph">Human connections form an integral part of life's magnificence. The shared moments of empathy, compassion, and understanding create bonds that transcend time. The support of friends and family during trials and triumphs amplifies the joy and lessens the burden, showcasing the interconnectedness that makes life truly wonderful.</p>
                <p className="paragraph">Nature, a timeless muse, adds another layer of enchantment to our existence. From the rhythmic dance of leaves in the wind to the soothing sounds of a babbling brook, the natural world envelops us in a serene embrace. The beauty of a blooming flower and the majesty of towering mountains remind us of the profound wonders that exist beyond our immediate concerns.</p>
                <p className="paragraph">In the realm of possibilities, each new day offers a chance for growth, learning, and self-discovery. Life's tapestry is continually evolving, and our ability to adapt and embrace change contributes to the vibrancy of our narrative. The pursuit of knowledge, the exploration of passions, and the discovery of new perspectives enrich our lives, making each day an opportunity for personal evolution.</p>
                <p className="paragraph">Life, in all its wonder, is a celebration of existence. It beckons us to savor the flavors of joy, navigate the twists of challenge, and relish the beauty in both the extraordinary and the ordinary. As we traverse the intricate threads of our individual stories, let us marvel at the grand spectacle that is life—a mosaic of moments, a symphony of experiences, and a journey of endless possibilities.</p>
                <h3 className="title text-right">- ChatGPT</h3>
            </div>
        </div>
    );
}
