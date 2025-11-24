import { Facebook, Twitter, Linkedin, Link2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const { toast } = useToast();
  const fullUrl = `${window.location.origin}${url}`;

  const handleShare = async (platform: string) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
        break;
      case "native":
        if (navigator.share) {
          try {
            await navigator.share({
              title,
              text: description,
              url: fullUrl,
            });
            return;
          } catch (err) {
            console.log("Share canceled");
            return;
          }
        }
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(fullUrl);
          toast({
            title: "Link kopiran!",
            description: "Link je kopiran u clipboard.",
          });
          return;
        } catch (err) {
          toast({
            title: "Greška",
            description: "Nije moguće kopirati link.",
            variant: "destructive",
          });
          return;
        }
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground mr-2">Podeli:</span>
      
      {navigator.share && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("native")}
          className="gap-2"
        >
          <Share2 className="w-4 h-4" />
          Podeli
        </Button>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("facebook")}
        className="gap-2"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("twitter")}
        className="gap-2"
      >
        <Twitter className="w-4 h-4" />
        Twitter
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("linkedin")}
        className="gap-2"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("copy")}
        className="gap-2"
      >
        <Link2 className="w-4 h-4" />
        Kopiraj link
      </Button>
    </div>
  );
};
