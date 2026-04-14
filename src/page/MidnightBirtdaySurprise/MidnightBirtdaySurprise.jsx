import React, { useState } from 'react';
import globalStyles from '../../constants/midnightBirthdayStyles';
import { PHASES } from '../../constants/data';
import { useFallingStars } from '../../hooks/useFallingStars';
import Nebulas from '../../components/MidnightBirtdaySurprise/Nebulas';
import StarField from '../../components/MidnightBirtdaySurprise/StarField';
import FallingStars from '../../components/MidnightBirtdaySurprise/FallingStars';
import Confetti from '../../components/MidnightBirtdaySurprise/Confetti';
import BirthdayHeader from '../../components/MidnightBirtdaySurprise/BirthdayHeader';
import CakeSection from '../../components/MidnightBirtdaySurprise/CakeSection';
import Scrapbook from '../../components/MidnightBirtdaySurprise/Scrapbook';

function MidnightBirthdaySurprise() {
    const [phase, setPhase] = useState(PHASES.INTRO);
    const [blownOut, setBlownOut] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { fallingStars, removeStar } = useFallingStars()

    const handleGiftClick = () => {
        if (phase === PHASES.INTRO) setPhase(PHASES.CAKE)
    }

    const handleBlowClick = () => {
        if (phase !== PHASES.CAKE) return
        setPhase(PHASES.BLOWING)
        setBlownOut(true)
        setShowConfetti(true)
        setTimeout(() => {
            setShowConfetti(false)
            setPhase(PHASES.GIFT)
        }, 1800)
    }

    return (
        <>
            {/* Global keyframes & utility classes */}
            <style>{globalStyles}</style>

            {/* ── Scene ── */}
            <div style={{
                width: '100%', height: '100%', minHeight: 500,
                background: 'radial-gradient(ellipse at 60% 40%, #0d0042 0%, #05001a 40%, #000008 100%)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Cormorant Garamond', serif",
            }}>

                {/* Background layers */}
                <Nebulas />
                <StarField />

                {/* Falling shooting stars */}
                {/* {fallingStars.map((id) => (
                    <FallingStars key={id} onDone={() => removeStar(id)} />
                ))} */}

                {/* Confetti burst on candle blow */}
                <Confetti active={showConfetti} />

                {/* ── Main content card ── */}
                <div style={{
                    position: 'relative', zIndex: 10,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', textAlign: 'center',
                    padding: '24px 20px 20px',
                    maxWidth: 860, width: '95%',
                }}>
                    {/* Name + photo + gift button */}
                    <BirthdayHeader phase={phase} onGiftClick={handleGiftClick} />

                    {/* Cake + blow button */}
                    <CakeSection phase={phase} blownOut={blownOut} onBlowClick={handleBlowClick} />

                    {/* Digital memory scrapbook */}
                    {phase === PHASES.GIFT && <Scrapbook />}
                </div>
            </div>
        </>
    )
}
export default MidnightBirthdaySurprise;