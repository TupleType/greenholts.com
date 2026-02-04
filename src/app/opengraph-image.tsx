import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getFontData = async () => {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : DATA.url;

    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      fetch(
        new URL("/fonts/CabinetGrotesk-Medium.ttf", baseUrl).toString(),
      ).then((res) => res.arrayBuffer()),
      fetch(
        new URL("/fonts/ClashDisplay-Semibold.ttf", baseUrl).toString(),
      ).then((res) => res.arrayBuffer()),
    ]);
    return { cabinetGrotesk, clashDisplay };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
};

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    position: "relative",
  },
  middleWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    position: "relative",
    padding: "40px",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
    padding: "70px",
    borderRadius: "12px",
    gap: "70px",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: "360px",
    height: "360px",
    borderRadius: "32px",
    border: "4px solid #e5e5e5",
    objectFit: "cover",
  },
  title: {
    fontFamily: "Clash Display",
    fontSize: "88px",
    fontWeight: "600",
    lineHeight: "1.05",
    textAlign: "left",
    color: "#000000",
    marginBottom: "24px",
    letterSpacing: "-0.02em",
  },
  description: {
    fontSize: "38px",
    fontWeight: "400",
    lineHeight: "1.4",
    textAlign: "left",
    color: "#404040",
    textWrap: "balance",
  },
} as const;

export default async function Image() {
  try {
    const fontData = await getFontData();
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : DATA.url;

    const imageUrl = new URL(DATA.avatarUrl, baseUrl).toString();
    const gridUrl = new URL("/grid.png", baseUrl).toString();

    return new ImageResponse(
      <div style={styles.outerWrapper}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "200px",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <img
            src={gridUrl}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div style={styles.middleWrapper}>
          <div style={styles.wrapper}>
            {imageUrl && (
              <div style={styles.imageSection}>
                <img src={imageUrl} alt={DATA.name} style={styles.image} />
              </div>
            )}
            <div style={styles.mainContainer}>
              <div style={styles.title}>{DATA.name}</div>
              {DATA.description && (
                <div style={styles.description}>{DATA.description}</div>
              )}
            </div>
          </div>
        </div>
      </div>,
      {
        ...size,
        fonts: fontData
          ? [
              {
                name: "Cabinet Grotesk",
                data: fontData.cabinetGrotesk,
                weight: 400,
                style: "normal",
              },
              {
                name: "Cabinet Grotesk",
                data: fontData.cabinetGrotesk,
                weight: 700,
                style: "normal",
              },
              {
                name: "Clash Display",
                data: fontData.clashDisplay,
                weight: 600,
                style: "normal",
              },
            ]
          : undefined,
      },
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500,
      },
    );
  }
}
