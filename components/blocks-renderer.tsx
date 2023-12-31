import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Events } from "./blocks/events";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Gallery } from "./blocks/gallery";
import { Video } from "./blocks/video";
import { Nav } from "./blocks/nav";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksGallery":
      return <Gallery data={block} />;
    case "PageBlocksVideo":
      return <Video data={block} />;
    case "PageBlocksNav":
      return <Nav data={block} />;
    case "PageBlocksEvents":
      return <Events data={block} />;
    default:
      return null;
  }
};
