import sys
import json
from sentiment import analyze_text


def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "no input provided"}))
        return
    text = sys.argv[1]
    result = analyze_text(text)
    print(json.dumps(result))


if __name__ == "__main__":
    main()
