/* eslint-disable react-hooks/rules-of-hooks */
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Witness Yuji Itadori's entanglement with the arcane as he confronts the spectral in Tokyo's shadows, where sorcerers battle curses that threaten humanity.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Jujutsu Kaisen, a dark fantasy and action anime, brought to life by the acclaimed studio MAPPA.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>More by MAPPA</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}