import Head from "next/head";
import Header from "../components/pageHeader.js";
import HomeLink from "../components/homeLink.js";
import ModelsLink from "../components/modelsLink.js";
import ImageViewer from "../components/imageViewer.js";
import styles from "../styles/Book.module.css";

export default function Book() {
  return (
    <>
      <Header leftIcon={<HomeLink />} rightIcon={<ModelsLink />} />
      <ImageViewer />
      <div className={styles.imageNote}>
        <i>
          The images above provide a record of Generative Strata's physical
          iteration as a 452-page book.
        </i>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className={styles.essay}>
            <div className={styles.essayTitle}>
              Prose As Architecture (Mike Corrao)
            </div>
            <div className={styles.essayBody}>
              <p>
                Generative Strata is a work of immaculate conception. Although
                my actions led to the processes that created the text, I do not
                view myself as its author. I created the scaffolding--the
                program--that wrote this book. It is a very simple program.
                Essentially it is just a set of alternating word banks each
                pulling from a few hundred different possible words and placing
                them in whichever order it desires. Initially the program lacked
                any punctuation. It alternated between root words and connecting
                words. The root words primarily consisted of nouns and
                occasionally adjectives. Terms like: zone, body, meat, text,
                etc. As well as more complex, hyphenated terms: archaic
                prosthetic, organic-without-organs, abdominal-zone. Connecting
                words primarily consisted of prepositions, conjunctions, and
                verbs. Simple terms: is, and, was, are, and so on. Along with
                more specific verbs like: metabolizing, becoming, rearranging,
                assembling. The primary function of the connecting words is to
                hold the root words together and to form unexpected connections
                between them. In later stages, I added a third word bank, the
                symbol category: &, +, ?, !. Where the first two variables are
                set to alternate back and forth, the symbol variable has the
                potential to show up after any root word. Within each of these
                word banks, all terms are set to have equal likelihood with two
                exceptions. In the connecting word category, is is set to appear
                three times more often. And in the symbol category, periods and
                exclamation points are set to be three times more likely.
              </p>
              <p>
                All of this was done in a program called Twine. Twine is
                primarily used to make choose-your-own-adventure games. It
                allows artists to use a very approachable interface to assemble
                these programs in a web of small coded cells. Generative Strata
                only required one of these cells, but the contents of the cell
                were massive. Not having a background in coding, I used Twine
                because I was familiar with it from interactive projects I had
                done in the past. Part of me very much enjoys misusing
                technology. It allows for this somewhat arcane persona.
                Manipulating the unknown in order to create something that is
                not entirely my own. The drawback of this is that I was unable
                to really optimize the program. It was only able to render about
                one thousand words at a time. I copied these batches into a word
                document until I was satisfied with the amount of material I had
                to work with, then I set the page dimensions to nine inches by
                nine inches and began formating. The text is split into three
                sections, Major, Media, and Minor which are distinguished by
                their vastly differing layouts.
              </p>
              <p>
                The text is not confined by its ability to communicate with you,
                or its ability to reciprocate the feelings that you feel towards
                it. I am unsatisfied with the ways that prose has been reduced
                into its strictly narrative uses. I would like to instead
                propose the alternatives. Prose as an organism to observe. Prose
                as a structure to move through. Prose as amassed data to
                investigate. It is not my intention to erase narrative, only to
                expand the potentialities of the medium. To arrange new texts in
                the periphery, at the boundary of what is and is not text. To
                ask what defines the text as itself and what mutations it can
                endure before becoming something else entirely.
              </p>
              <p>
                Part of my intention in discussing how the program was made was
                to reveal that it is not as complicated as one might assume.
                There is no artificial intelligence guiding Generative Strata. I
                did not want to compete with another consciousness. The occult
                nature of the text demands an enigmatic process. I wanted the
                construction of this object to be guided by functions that I
                myself do not fully understand, that I cannot predict. That do
                not act with traceable intent. The philosophies of the text are
                the product of the random nothingness of the abstract. Whatever
                virtual machine churns behind the monitor. I handed this program
                the language that it contorts, but I did not tell it what to
                say. The text is a procedurally-generated metaphysics.
                Proto-philosopher uploaded into an executable. With each
                activation rendering a new tome in the expanded field. Weaving
                old language into new incomprehensible hypotheses. In the same
                manner as other philosophical tomes, like Being and Nothingness
                or Critique of Pure Reason, I do not expect anyone to read the
                entirety of this book. I have not read the entirety of this
                book. Instead I think that we might find other uses in the text.
              </p>
              <p>
                <i>Generative Strata</i> in one regard is a tool for
                bibliomancy. For the user to pick a section and then choose a
                random page within it. To read for as long as they would like
                and to extract whatever information they think / know is hidden
                within. The sections of Major, Media, and Minor are intended for
                their own individual uses. Major for desires of a longue duree.
                For ambient or meditative journeys through the text or the self.
                My encounters thus far with Major have been somewhat hypnagogic.
                There is a kind of Tarkovskyan dreaminess to the experience.
                Like you are sleeping while awake. Media is more intended for
                brief sessions. When the user is looking for more focused sets
                of information. Hence the thinner columns and the introduction
                of fragmentation within each column. Minor is the most complex
                section. For encounters ranging from aphorism to text-wall. The
                true text of this section (the non-strikethrough text) is wide
                and often short. The false text (the strikethrough text) stays
                consistent as a thin column along the left-hand side. Noting the
                potentialities of a deceit, or of a facade. Moments of reality
                eradicated by the fantasy-screen. Minor can be read / engaged
                with as a set of warnings and encouragements, or as a revelation
                of the shallow and fake nature of language. Beyond its
                bibliomantic qualities / uses, we might also view Generative
                Strata as an architectural object. A purely aesthetic text made
                to be looked at rather than read. Its function is to be moved
                through. The lexicon becomes a list of building materials. Each
                sentence a different display of their possible arrangements. In
                this regard, Major, Media, and Minor become variations in design
                and layout. Different structures in the Generative Strata
                complex, or different levels of the Ballardian skyscraper. Each
                its own micronation, built from the same materials, but governed
                by different laws. The longue duree of Major then becomes
                labyrinthine. Untrustworthy and inwardly complexifying. An
                endlessly convoluted network of hallways, with misleading
                epitaphs and unexpected dead-ends. The user might lose their
                bearings and attempt to double back, return to a previous
                sentence, and march forward again. The rigid structure of this
                section allows the user to enter an ambient zone. To gloss over
                the text and not really read it, to just scan each line. I think
                this kind of reading tends to be seen as a mistake or as useless
                (a waste of a book), but I think that there is a value in it.
                The text becomes a psychogeographic tool. It allows you to
                wander without repercussions. Where you can retreat into the
                inner landscape and let the distant whispering language guide
                your dreams.
              </p>
              <p>
                Counter to this is the fragmentary nature of Media. Where Major
                is a seemingly endless labyrinth, Media is a network of floating
                islands. The blankness of the white page becomes more visible
                here, peeking through the gaps in the text. Open sky behind
                crumbling columns. The micro-structures that exist on each page
                then become smaller and more comprehensible. Their materials are
                easier to locate / isolate. The longue duree of Major is
                replaced with the frantic leaping of the eye from one block to
                another. Brief stints on each platform. But there is not only
                design in that which we can see. No space in Generative Strata
                is truly empty. The text of Media remains unbroken. Only the
                traits have changed. Portions of the text are not removed, they
                are recolored. At the end of each cluster, the text turns white,
                then at the next island, it turns black again. Language hides in
                each threshold--unreadable. The fragmented way that you read
                Media is not the fault of the text, it is the fault of the
                user--myself included.
              </p>
              <p>
                {" "}
                Minor further complexifies this process. The text is broken into
                two columns, one thin one wide. The thin column is completely
                struck-through. The wide column is broken into short paragraphs,
                typically three or four lines long--again broken by an
                unreadable text. The deceptive nature of Generative Strata is
                most prevalent here. It is a postmodern structure, or maybe
                better than that, it is a completely enigmatic structure. The
                user takes up a kind of investigative position, speculating the
                nature of the struck-through text. Perhaps it is the truth that
                has peeked through the fog, bound and dragged back. You see it
                as it is roped away. Perhaps it is there to lead you astray. I
                cannot say. The fluctuations of Minor give a strange kind of
                rhythm. It is the most active reading that takes place in the
                text. Its arrangement feels more purposeful. Moving through it,
                there is the sense that some architect has designed this place,
                that someone / something built it. Minor is the final structure.
                It is the text in its most overtly architectural form. Its
                materials have become so familiar that they have lost their
                meaning. All that is left is the ways that they have been laid
                onto their foundation.
              </p>
              <p>
                But this is only my interpretation of the text. Writing has
                nothing to do with meaning. It has to do with land-surveying and
                cartography, including the mapping of countries yet to come
                (Deleuze). This text is not bound by my intentions. I did not
                write this book. I spawned the abstract machine that did, I
                arranged the text, but I did not write it. I have not even read
                it in its entirety. There is no misinterpretation of the text
                because there is no meaning that guides it. The purpose of the
                text is to do as the user desires it to. To take on the form and
                function that is demanded of it. This essay is not meant to
                limit your encounter with the text, but to offer two methods by
                which it might be navigated. It is here partially to remind you
                that the book is not a book. It is a strange textual-object. I
                do not know if there will be a digital copy of the text. Part of
                me hopes there will not be. Another part of me wonders how the
                experiences will differ (perhaps the digital iteration would
                generate procedurally, and truly feel like it is a living
                organism, mutating in front of you). The physical iteration of
                Generative Strata emanates a strange aura that I do not think
                could exist digitally, not without mutating into a completely
                different kind of strange. In this random nothingness, the
                object appears sacred. Recycling the tools of its lexicon into
                something large and mystifying. Where each moment of
                comprehension is an anomaly. And the user is left to construct
                their own meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
