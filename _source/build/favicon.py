import sys
from PIL import Image, ImageDraw
out = sys.argv[1]
lg = Image.open(out + '/assets/logo.png').convert('RGBA')
mark = lg.crop((0, 0, lg.width, 103))  # roof + leaf, without the small text
def tile(size, pad=0.04, radius=0.2):
    S = size * 4
    t = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(t).rounded_rectangle((0, 0, S - 1, S - 1), int(S * radius), fill='white')
    w = int(S * (1 - 2 * pad)); h = int(w * mark.height / mark.width)
    m = mark.resize((w, h), Image.LANCZOS)
    t.alpha_composite(m, ((S - w) // 2, (S - h) // 2))
    return t.resize((size, size), Image.LANCZOS)
tile(48).save(out + '/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
tile(32).save(out + '/assets/favicon-32.png')
tile(180, radius=0).save(out + '/assets/apple-touch-icon.png')
tile(192).save(out + '/assets/icon-192.png')
tile(512).save(out + '/assets/icon-512.png')
