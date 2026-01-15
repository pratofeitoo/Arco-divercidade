# Graphical Apps Development Copilot Instructions

## General Project Rules
- Prioritize developer-friendly, extensible, and modular code.
- Elements should be customizable with clean, intuitive interfaces.
- Make it easy to create new elements as needed.

## Python Project Rules
- Use Python 3.12 for all code.
- Use UV for installing dependencies.
- Prefer classes over functions.
- Use NumPy/SciPy style docstrings.

## Element File Structure
- Each element directory should contain:
  - `__init__.py`
  - `<element_name>_element.py`
  - `<element_name>_model.py`
  - `css/` directory for styling.

## Panel View Rules
- Use Panel for the visualization layer and GUI.
- Views should be composed of Panel objects, styled with Python and CSS.

## Langchain Integration
- Use Langchain for LLM-related workflows in `/llm/` files.
